import prisma, { getPrismaInitTimestamp } from "../db/prisma";
import { cached, DEFAULT_TTL_SEC } from "../utils/cache";
import * as geminiService from "./geminiService";
import * as redisSearch from "./redisSearchService";

export interface SearchFilters {
	siglaTipo?: string;
	ano?: number;
	codTipo?: number;
	descricaoTipo?: string;
	codOrgao?: number;
	siglaOrgao?: string;
	regime?: string;
	descricaoTramitacao?: string;
	idTipoTramitacao?: number;
	descricaoSituacao?: string;
	apreciacao?: string;
}

export interface SearchParams {
	query?: string;
	filters?: SearchFilters;
	limit: number;
	offset: number;
	fast?: boolean; // when true, skip expensive COUNT and return hasMore instead
}

export interface SearchResult {
	data: any[];
	total: number; // -1 when unknown (fast path)
	limit: number;
	offset: number;
	pages: number; // -1 when unknown (fast path)
	query?: string;
	hasFilters: boolean;
	hasMore?: boolean; // true when there are more results (fast path)
	fromCache?: boolean; // true when returned from cache
}

/**
 * Search proposições by term and filters
 * Uses RediSearch for fast full-text search
 */
export const searchProposicoes = async (
	params: SearchParams
): Promise<SearchResult> => {
	const { query, filters = {}, limit, offset } = params;

	const debugTimings = process.env.DEBUG_TIMINGS === 'true' || process.env.NODE_ENV === 'development';
	const startAt = Date.now();

	try {
		// Try RediSearch first
		const redisCount = await redisSearch.getProposicoesCount();
		
		if (redisCount > 0) {
			if (debugTimings) console.log(`[ProposicaoService] Using RediSearch (${redisCount} docs)`);
			
			const result = await redisSearch.searchProposicoes({
				query,
				filters,
				limit,
				offset,
			});

			if (debugTimings) console.log(`[ProposicaoService] RediSearch done - duration=${Date.now()-startAt}ms`);

			return {
				data: result.data,
				total: result.total,
				limit,
				offset,
				pages: Math.ceil(result.total / limit),
				query,
				hasFilters: Object.keys(filters).length > 0,
				fromCache: false,
			};
		}
	} catch (err) {
		console.error("[ProposicaoService] RediSearch failed, falling back to Postgres:", err);
	}

	// Fallback to Postgres if Redis is empty or fails
	if (debugTimings) console.log(`[ProposicaoService] Fallback to Postgres`);
	return searchProposicoesFallback(params);
};

/**
 * Fallback search using Postgres (used when Redis is not available)
 */
const searchProposicoesFallback = async (
	params: SearchParams
): Promise<SearchResult> => {
	const { query, filters = {}, limit, offset } = params;
	const debugTimings = process.env.DEBUG_TIMINGS === 'true' || process.env.NODE_ENV === 'development';
	const startAt = Date.now();

	// Build where conditions
	const where: any = {};

	if (filters.siglaTipo) where.siglaTipo = filters.siglaTipo;
	if (filters.ano) where.ano = filters.ano;
	if (filters.codTipo) where.codTipo = filters.codTipo;
	if (filters.descricaoTipo) {
		where.descricaoTipo = { contains: filters.descricaoTipo, mode: "insensitive" };
	}
	if (filters.codOrgao) where.codOrgao = filters.codOrgao;
	if (filters.siglaOrgao) where.siglaOrgao = filters.siglaOrgao;
	if (filters.regime) {
		where.regime = { contains: filters.regime, mode: "insensitive" };
	}
	if (filters.descricaoTramitacao) {
		where.descricaoTramitacao = { contains: filters.descricaoTramitacao, mode: "insensitive" };
	}
	if (filters.idTipoTramitacao) where.idTipoTramitacao = filters.idTipoTramitacao;
	if (filters.descricaoSituacao) {
		where.descricaoSituacao = { contains: filters.descricaoSituacao, mode: "insensitive" };
	}
	if (filters.apreciacao) {
		where.statusApreciacao = { contains: filters.apreciacao, mode: "insensitive" };
	}

	if (query && query.length > 0) {
		const words = query.trim().split(/\s+/).filter((word) => word.length > 0);
		if (words.length > 0) {
			where.AND = words.map((word) => ({
				OR: [
					{ keywords: { contains: word, mode: "insensitive" as const } },
					{ ementa: { contains: word, mode: "insensitive" as const } },
					{ despacho: { contains: word, mode: "insensitive" as const } },
				],
			}));
		}
	}

	const [results, total] = await Promise.all([
		prisma.proposicao.findMany({
			where,
			skip: offset,
			take: limit,
			orderBy: { dataApresentacao: "desc" },
		}),
		prisma.proposicao.count({ where }),
	]);

	if (debugTimings) console.log(`[ProposicaoService] Postgres fallback done - duration=${Date.now()-startAt}ms`);

	return {
		data: results,
		total,
		limit,
		offset,
		pages: Math.ceil(total / limit),
		query,
		hasFilters: Object.keys(filters).length > 0,
		fromCache: false,
	};
};

/**
 * Summarize only (no TTS) — helper for the controller's async decisions
 */
export const summarizeProposicao = async (id: number) => {
	const proposicao = await getProposicaoById(id);
	if (!proposicao) return null;

	const pieces: string[] = [];
	pieces.push(`ID: ${proposicao.id} - ${proposicao.siglaTipo} ${proposicao.numero}/${proposicao.ano}`);
	if (proposicao.ementa) pieces.push(`Ementa: ${proposicao.ementa}`);
	if (proposicao.ementaDetalhada) pieces.push(`Ementa Detalhada: ${proposicao.ementaDetalhada}`);
	if (proposicao.keywords) pieces.push(`Keywords: ${proposicao.keywords}`);
	if (proposicao.despacho) pieces.push(`Despacho: ${proposicao.despacho}`);
	if (proposicao.descricaoSituacao) pieces.push(`Situação: ${proposicao.descricaoSituacao}`);
	if (proposicao.regime) pieces.push(`Regime: ${proposicao.regime}`);

	const content = pieces.join("\n\n");
	const summarized = await geminiService.summarizeText(content, "pt-BR");
	return summarized;
};

/**
 * Get proposição by ID
 * Tries RediSearch first, falls back to Postgres
 */
export const getProposicaoById = async (id: number) => {
	// Try RediSearch first
	try {
		const redisDoc = await redisSearch.getProposicaoById(id);
		if (redisDoc) {
			return redisDoc;
		}
	} catch (err) {
		console.error("[ProposicaoService] RediSearch getById failed:", err);
	}

	// Fallback to Postgres (cached)
	const cacheKey = `proposicao:${id}`;
	return cached(cacheKey, DEFAULT_TTL_SEC, async () => {
		// Use generated model if available
		try {
			if (prisma.proposicao && typeof prisma.proposicao.findUnique === 'function') {
				return await prisma.proposicao.findUnique({ where: { id } });
			}
		} catch (err) {
			console.error('[ProposicaoService] Error using prisma.proposicao model:', err);
		}

		// Fallback to raw query if generated client lacks the model
		try {
			const rows: any = await prisma.$queryRaw`SELECT * FROM proposicoes WHERE id = ${id} LIMIT 1`;
			return Array.isArray(rows) ? rows[0] ?? null : rows ?? null;
		} catch (err) {
			console.error('[ProposicaoService] Fallback raw query failed:', err);
			throw err;
		}
	});
};

/**
 * Simplify proposição using Gemini text model and generate audio with TTS.
 * Returns an object with `text` (summarized content) and `audioBase64`.
 */
export const simplifyProposicao = async (id: number) => {
	const proposicao = await getProposicaoById(id);
	if (!proposicao) return null;

	// Build a combined text with relevant fields for summarization
	const pieces: string[] = [];
	pieces.push(`ID: ${proposicao.id} - ${proposicao.siglaTipo} ${proposicao.numero}/${proposicao.ano}`);
	if (proposicao.ementa) pieces.push(`Ementa: ${proposicao.ementa}`);
	if (proposicao.ementaDetalhada) pieces.push(`Ementa Detalhada: ${proposicao.ementaDetalhada}`);
	if (proposicao.keywords) pieces.push(`Keywords: ${proposicao.keywords}`);
	if (proposicao.despacho) pieces.push(`Despacho: ${proposicao.despacho}`);
	if (proposicao.descricaoSituacao) pieces.push(`Situação: ${proposicao.descricaoSituacao}`);
	if (proposicao.regime) pieces.push(`Regime: ${proposicao.regime}`);

	const content = pieces.join("\n\n");

	// Summarize text
	try {
		console.log(`[ProposicaoService] SimplifyProposicao - id=${id} - content chars=${content.length}`);
		const summarized = await geminiService.summarizeText(content, "pt-BR");
		let audioBase64: string | null = null;
		try {
			audioBase64 = await geminiService.textToSpeechBase64(summarized);
		} catch (ttsErr) {
			console.error("[ProposicaoService] TTS error:", ttsErr);
			// Keep going and return text only if TTS fails
			audioBase64 = null;
		}

        

        

		return {
			text: summarized,
			audioBase64,
		};
	} catch (err) {
		console.error("[ProposicaoService] simplifyProposicao error:", err);
		throw err;
	}
};

/**
 * Get all proposições with pagination
 */
export const getAllProposicoes = async (
	skip: number,
	take: number,
	filters?: Partial<SearchFilters>
) => {
	const where: any = {};

	if (filters?.ano) {
		where.ano = filters.ano;
	}
	if (filters?.siglaTipo) {
		where.siglaTipo = filters.siglaTipo;
	}

	const [data, total] = await Promise.all([
		prisma.proposicao.findMany({
			where,
			skip,
			take,
			orderBy: { dataApresentacao: "desc" },
		}),
		prisma.proposicao.count({ where }),
	]);

	return {
		data,
		total,
		page: Math.floor(skip / take) + 1,
		pages: Math.ceil(total / take),
	};
};

/**
 * Get proposições by tipo (siglaTipo)
 */
export const getProposicoesByTipo = async (
	tipo: string,
	skip: number,
	take: number
) => {
	const [data, total] = await Promise.all([
		prisma.proposicao.findMany({
			where: { siglaTipo: tipo.toUpperCase() },
			skip,
			take,
			orderBy: { dataApresentacao: "desc" },
		}),
		prisma.proposicao.count({
			where: { siglaTipo: tipo.toUpperCase() },
		}),
	]);

	return {
		data,
		total,
		page: Math.floor(skip / take) + 1,
		pages: Math.ceil(total / take),
	};
};

/**
 * Get proposições by situação
 */
export const getProposicoesBySituacao = async (
	situacao: string,
	skip: number,
	take: number
) => {
	const [data, total] = await Promise.all([
		prisma.proposicao.findMany({
			where: {
				descricaoSituacao: {
					contains: situacao,
					mode: "insensitive",
				},
			},
			skip,
			take,
			orderBy: { statusData: "desc" },
		}),
		prisma.proposicao.count({
			where: {
				descricaoSituacao: {
					contains: situacao,
					mode: "insensitive",
				},
			},
		}),
	]);

	return {
		data,
		total,
		page: Math.floor(skip / take) + 1,
		pages: Math.ceil(total / take),
	};
};

/**
 * Get statistics about proposições
 */
export const getProposicaoStats = async () => {
	const total = await prisma.proposicao.count();

	const porAno = await prisma.proposicao.groupBy({
		by: ["ano"],
		_count: true,
		orderBy: { ano: "desc" },
	});

	const porTipo = await prisma.proposicao.groupBy({
		by: ["siglaTipo"],
		_count: true,
		orderBy: { _count: { siglaTipo: "desc" } },
	});

	const porSituacao = await prisma.proposicao.groupBy({
		by: ["descricaoSituacao"],
		_count: true,
		orderBy: { _count: { descricaoSituacao: "desc" } },
		take: 10,
	});

	return {
		total,
		porAno,
		porTipo,
		porSituacao,
	};
};

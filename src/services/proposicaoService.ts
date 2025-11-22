import prisma from "../db/prisma";

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
}

export interface SearchResult {
	data: any[];
	total: number;
	limit: number;
	offset: number;
	pages: number;
	query?: string;
	hasFilters: boolean;
}

/**
 * Search proposições by term and filters
 */
export const searchProposicoes = async (
	params: SearchParams
): Promise<SearchResult> => {
	const { query, filters = {}, limit, offset } = params;

	// Build where conditions
	const where: any = {};

	// Apply filters if provided
	if (filters.siglaTipo) {
		where.siglaTipo = filters.siglaTipo;
	}
	if (filters.ano) {
		where.ano = filters.ano;
	}
	if (filters.codTipo) {
		where.codTipo = filters.codTipo;
	}
	if (filters.descricaoTipo) {
		where.descricaoTipo = {
			contains: filters.descricaoTipo,
			mode: "insensitive",
		};
	}
	if (filters.codOrgao) {
		where.codOrgao = filters.codOrgao;
	}
	if (filters.siglaOrgao) {
		where.siglaOrgao = filters.siglaOrgao;
	}
	if (filters.regime) {
		where.regime = {
			contains: filters.regime,
			mode: "insensitive",
		};
	}
	if (filters.descricaoTramitacao) {
		where.descricaoTramitacao = {
			contains: filters.descricaoTramitacao,
			mode: "insensitive",
		};
	}
	if (filters.idTipoTramitacao) {
		where.idTipoTramitacao = filters.idTipoTramitacao;
	}
	if (filters.descricaoSituacao) {
		where.descricaoSituacao = {
			contains: filters.descricaoSituacao,
			mode: "insensitive",
		};
	}
	if (filters.apreciacao) {
		where.statusApreciacao = {
			contains: filters.apreciacao,
			mode: "insensitive",
		};
	}

	// Apply search term across multiple fields
	if (query && query.length > 0) {
		where.OR = [
			{
				keywords: {
					contains: query,
					mode: "insensitive",
				},
			},
			{
				ementa: {
					contains: query,
					mode: "insensitive",
				},
			},
			{
				despacho: {
					contains: query,
					mode: "insensitive",
				},
			},
		];
	}

	// Execute search
	const [results, total] = await Promise.all([
		prisma.proposicao.findMany({
			where,
			skip: offset,
			take: limit,
			orderBy: {
				dataApresentacao: "desc",
			},
		}),
		prisma.proposicao.count({ where }),
	]);

	return {
		data: results,
		total,
		limit,
		offset,
		pages: Math.ceil(total / limit),
		query,
		hasFilters: Object.keys(filters).length > 0,
	};
};

/**
 * Get proposição by ID
 */
export const getProposicaoById = async (id: number) => {
	return await prisma.proposicao.findUnique({
		where: { id },
	});
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

"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProposicaoStats = exports.getProposicoesBySituacao = exports.getProposicoesByTipo = exports.getAllProposicoes = exports.simplifyProposicao = exports.getProposicaoById = exports.summarizeProposicao = exports.searchProposicoes = void 0;
const prisma_1 = __importDefault(require("../db/prisma"));
const cache_1 = require("../utils/cache");
const geminiService = __importStar(require("./geminiService"));
const redisSearch = __importStar(require("./redisSearchService"));
/**
 * Search proposições by term and filters
 * Uses RediSearch for fast full-text search
 */
const searchProposicoes = (params) => __awaiter(void 0, void 0, void 0, function* () {
    const { query, filters = {}, limit, offset } = params;
    const debugTimings = process.env.DEBUG_TIMINGS === 'true' || process.env.NODE_ENV === 'development';
    const startAt = Date.now();
    try {
        // Try RediSearch first
        const redisCount = yield redisSearch.getProposicoesCount();
        if (redisCount > 0) {
            if (debugTimings)
                console.log(`[ProposicaoService] Using RediSearch (${redisCount} docs)`);
            const result = yield redisSearch.searchProposicoes({
                query,
                filters,
                limit,
                offset,
            });
            if (debugTimings)
                console.log(`[ProposicaoService] RediSearch done - duration=${Date.now() - startAt}ms`);
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
    }
    catch (err) {
        console.error("[ProposicaoService] RediSearch failed, falling back to Postgres:", err);
    }
    // Fallback to Postgres if Redis is empty or fails
    if (debugTimings)
        console.log(`[ProposicaoService] Fallback to Postgres`);
    return searchProposicoesFallback(params);
});
exports.searchProposicoes = searchProposicoes;
/**
 * Fallback search using Postgres (used when Redis is not available)
 */
const searchProposicoesFallback = (params) => __awaiter(void 0, void 0, void 0, function* () {
    const { query, filters = {}, limit, offset } = params;
    const debugTimings = process.env.DEBUG_TIMINGS === 'true' || process.env.NODE_ENV === 'development';
    const startAt = Date.now();
    // Build where conditions
    const where = {};
    if (filters.siglaTipo)
        where.siglaTipo = filters.siglaTipo;
    if (filters.ano)
        where.ano = filters.ano;
    if (filters.codTipo)
        where.codTipo = filters.codTipo;
    if (filters.descricaoTipo) {
        where.descricaoTipo = { contains: filters.descricaoTipo, mode: "insensitive" };
    }
    if (filters.codOrgao)
        where.codOrgao = filters.codOrgao;
    if (filters.siglaOrgao)
        where.siglaOrgao = filters.siglaOrgao;
    if (filters.regime) {
        where.regime = { contains: filters.regime, mode: "insensitive" };
    }
    if (filters.descricaoTramitacao) {
        where.descricaoTramitacao = { contains: filters.descricaoTramitacao, mode: "insensitive" };
    }
    if (filters.idTipoTramitacao)
        where.idTipoTramitacao = filters.idTipoTramitacao;
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
                    { keywords: { contains: word, mode: "insensitive" } },
                    { ementa: { contains: word, mode: "insensitive" } },
                    { despacho: { contains: word, mode: "insensitive" } },
                ],
            }));
        }
    }
    const [results, total] = yield Promise.all([
        prisma_1.default.proposicao.findMany({
            where,
            skip: offset,
            take: limit,
            orderBy: { dataApresentacao: "desc" },
        }),
        prisma_1.default.proposicao.count({ where }),
    ]);
    if (debugTimings)
        console.log(`[ProposicaoService] Postgres fallback done - duration=${Date.now() - startAt}ms`);
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
});
/**
 * Summarize only (no TTS) — helper for the controller's async decisions
 */
const summarizeProposicao = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const proposicao = yield (0, exports.getProposicaoById)(id);
    if (!proposicao)
        return null;
    const pieces = [];
    pieces.push(`ID: ${proposicao.id} - ${proposicao.siglaTipo} ${proposicao.numero}/${proposicao.ano}`);
    if (proposicao.ementa)
        pieces.push(`Ementa: ${proposicao.ementa}`);
    if (proposicao.ementaDetalhada)
        pieces.push(`Ementa Detalhada: ${proposicao.ementaDetalhada}`);
    if (proposicao.keywords)
        pieces.push(`Keywords: ${proposicao.keywords}`);
    if (proposicao.despacho)
        pieces.push(`Despacho: ${proposicao.despacho}`);
    if (proposicao.descricaoSituacao)
        pieces.push(`Situação: ${proposicao.descricaoSituacao}`);
    if (proposicao.regime)
        pieces.push(`Regime: ${proposicao.regime}`);
    const content = pieces.join("\n\n");
    const summarized = yield geminiService.summarizeText(content, "pt-BR");
    return summarized;
});
exports.summarizeProposicao = summarizeProposicao;
/**
 * Get proposição by ID
 * Tries RediSearch first, falls back to Postgres
 */
const getProposicaoById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    // Try RediSearch first
    try {
        const redisDoc = yield redisSearch.getProposicaoById(id);
        if (redisDoc) {
            return redisDoc;
        }
    }
    catch (err) {
        console.error("[ProposicaoService] RediSearch getById failed:", err);
    }
    // Fallback to Postgres (cached)
    const cacheKey = `proposicao:${id}`;
    return (0, cache_1.cached)(cacheKey, cache_1.DEFAULT_TTL_SEC, () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        // Use generated model if available
        try {
            if (prisma_1.default.proposicao && typeof prisma_1.default.proposicao.findUnique === 'function') {
                return yield prisma_1.default.proposicao.findUnique({ where: { id } });
            }
        }
        catch (err) {
            console.error('[ProposicaoService] Error using prisma.proposicao model:', err);
        }
        // Fallback to raw query if generated client lacks the model
        try {
            const rows = yield prisma_1.default.$queryRaw `SELECT * FROM proposicoes WHERE id = ${id} LIMIT 1`;
            return Array.isArray(rows) ? (_a = rows[0]) !== null && _a !== void 0 ? _a : null : rows !== null && rows !== void 0 ? rows : null;
        }
        catch (err) {
            console.error('[ProposicaoService] Fallback raw query failed:', err);
            throw err;
        }
    }));
});
exports.getProposicaoById = getProposicaoById;
/**
 * Simplify proposição using Gemini text model and generate audio with TTS.
 * Returns an object with `text` (summarized content) and `audioBase64`.
 */
const simplifyProposicao = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const proposicao = yield (0, exports.getProposicaoById)(id);
    if (!proposicao)
        return null;
    // Build a combined text with relevant fields for summarization
    const pieces = [];
    pieces.push(`ID: ${proposicao.id} - ${proposicao.siglaTipo} ${proposicao.numero}/${proposicao.ano}`);
    if (proposicao.ementa)
        pieces.push(`Ementa: ${proposicao.ementa}`);
    if (proposicao.ementaDetalhada)
        pieces.push(`Ementa Detalhada: ${proposicao.ementaDetalhada}`);
    if (proposicao.keywords)
        pieces.push(`Keywords: ${proposicao.keywords}`);
    if (proposicao.despacho)
        pieces.push(`Despacho: ${proposicao.despacho}`);
    if (proposicao.descricaoSituacao)
        pieces.push(`Situação: ${proposicao.descricaoSituacao}`);
    if (proposicao.regime)
        pieces.push(`Regime: ${proposicao.regime}`);
    const content = pieces.join("\n\n");
    // Summarize text
    try {
        console.log(`[ProposicaoService] SimplifyProposicao - id=${id} - content chars=${content.length}`);
        const summarized = yield geminiService.summarizeText(content, "pt-BR");
        let audioBase64 = null;
        try {
            audioBase64 = yield geminiService.textToSpeechBase64(summarized);
        }
        catch (ttsErr) {
            console.error("[ProposicaoService] TTS error:", ttsErr);
            // Keep going and return text only if TTS fails
            audioBase64 = null;
        }
        return {
            text: summarized,
            audioBase64,
        };
    }
    catch (err) {
        console.error("[ProposicaoService] simplifyProposicao error:", err);
        throw err;
    }
});
exports.simplifyProposicao = simplifyProposicao;
/**
 * Get all proposições with pagination
 */
const getAllProposicoes = (skip, take, filters) => __awaiter(void 0, void 0, void 0, function* () {
    const where = {};
    if (filters === null || filters === void 0 ? void 0 : filters.ano) {
        where.ano = filters.ano;
    }
    if (filters === null || filters === void 0 ? void 0 : filters.siglaTipo) {
        where.siglaTipo = filters.siglaTipo;
    }
    const [data, total] = yield Promise.all([
        prisma_1.default.proposicao.findMany({
            where,
            skip,
            take,
            orderBy: { dataApresentacao: "desc" },
        }),
        prisma_1.default.proposicao.count({ where }),
    ]);
    return {
        data,
        total,
        page: Math.floor(skip / take) + 1,
        pages: Math.ceil(total / take),
    };
});
exports.getAllProposicoes = getAllProposicoes;
/**
 * Get proposições by tipo (siglaTipo)
 */
const getProposicoesByTipo = (tipo, skip, take) => __awaiter(void 0, void 0, void 0, function* () {
    const [data, total] = yield Promise.all([
        prisma_1.default.proposicao.findMany({
            where: { siglaTipo: tipo.toUpperCase() },
            skip,
            take,
            orderBy: { dataApresentacao: "desc" },
        }),
        prisma_1.default.proposicao.count({
            where: { siglaTipo: tipo.toUpperCase() },
        }),
    ]);
    return {
        data,
        total,
        page: Math.floor(skip / take) + 1,
        pages: Math.ceil(total / take),
    };
});
exports.getProposicoesByTipo = getProposicoesByTipo;
/**
 * Get proposições by situação
 */
const getProposicoesBySituacao = (situacao, skip, take) => __awaiter(void 0, void 0, void 0, function* () {
    const [data, total] = yield Promise.all([
        prisma_1.default.proposicao.findMany({
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
        prisma_1.default.proposicao.count({
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
});
exports.getProposicoesBySituacao = getProposicoesBySituacao;
/**
 * Get statistics about proposições
 */
const getProposicaoStats = () => __awaiter(void 0, void 0, void 0, function* () {
    const total = yield prisma_1.default.proposicao.count();
    const porAno = yield prisma_1.default.proposicao.groupBy({
        by: ["ano"],
        _count: true,
        orderBy: { ano: "desc" },
    });
    const porTipo = yield prisma_1.default.proposicao.groupBy({
        by: ["siglaTipo"],
        _count: true,
        orderBy: { _count: { siglaTipo: "desc" } },
    });
    const porSituacao = yield prisma_1.default.proposicao.groupBy({
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
});
exports.getProposicaoStats = getProposicaoStats;

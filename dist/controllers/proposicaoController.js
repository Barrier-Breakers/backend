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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAudioTask = exports.getStats = exports.getBySituacao = exports.getByTipo = exports.getAll = exports.simplify = exports.getById = exports.search = void 0;
const proposicaoService = __importStar(require("../services/proposicaoService"));
const audioTaskService = __importStar(require("../services/audioTaskService"));
const ttsService = __importStar(require("../services/ttsService"));
/**
 * Search proposições by term and filters
 */
const search = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const searchTerm = ((_a = req.query.q) === null || _a === void 0 ? void 0 : _a.trim()) || "";
        const limit = Math.min(parseInt(req.query.limit) || 20, 100);
        const offset = parseInt(req.query.offset) || 0;
        // Extract filters from query
        const filters = {};
        if (req.query.siglaTipo) {
            filters.siglaTipo = req.query.siglaTipo;
        }
        if (req.query.ano) {
            filters.ano = parseInt(req.query.ano);
        }
        if (req.query.codTipo) {
            filters.codTipo = parseInt(req.query.codTipo);
        }
        if (req.query.descricaoTipo) {
            filters.descricaoTipo = req.query.descricaoTipo;
        }
        if (req.query.codOrgao) {
            filters.codOrgao = parseInt(req.query.codOrgao);
        }
        if (req.query.siglaOrgao) {
            filters.siglaOrgao = req.query.siglaOrgao;
        }
        if (req.query.regime) {
            filters.regime = req.query.regime;
        }
        if (req.query.descricaoTramitacao) {
            filters.descricaoTramitacao = req.query.descricaoTramitacao;
        }
        if (req.query.idTipoTramitacao) {
            filters.idTipoTramitacao = parseInt(req.query.idTipoTramitacao);
        }
        if (req.query.descricaoSituacao) {
            filters.descricaoSituacao = req.query.descricaoSituacao;
        }
        if (req.query.apreciacao) {
            filters.apreciacao = req.query.apreciacao;
        }
        const result = yield proposicaoService.searchProposicoes({
            query: searchTerm,
            filters,
            limit,
            offset,
        });
        res.status(200).json(result);
    }
    catch (error) {
        console.error("Search error:", error);
        res.status(500).json({ error: "Erro ao buscar proposições" });
    }
});
exports.search = search;
/**
 * Get proposição by ID
 */
const getById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            res.status(400).json({ error: "ID inválido" });
            return;
        }
        const proposicao = yield proposicaoService.getProposicaoById(id);
        if (!proposicao) {
            res.status(404).json({ error: "Proposição não encontrada" });
            return;
        }
        res.status(200).json(proposicao);
    }
    catch (error) {
        console.error("GetById error:", error);
        res.status(500).json({ error: "Erro ao buscar proposição" });
    }
});
exports.getById = getById;
/**
 * Simplify proposição and return text summary + audio (base64)
 */
const simplify = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        console.log(`[REQUEST] Simplify proposição called - params:`, req.params);
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            res.status(400).json({ error: "ID inválido" });
            return;
        }
        // Accept query param waitForAudio=true to wait for audio generation synchronously
        const waitForAudio = req.query.waitForAudio === "true";
        // Normalize codec: allow 'ogg_opus', 'ogg-opus', 'oggopus', 'opus', etc.
        let audioCodec = (req.query.audioCodec || "MP3").toLowerCase();
        if (audioCodec === "ogg-opus" || audioCodec === "ogg_opus" || audioCodec === "oggopus" || audioCodec === "opus") {
            audioCodec = "OGG_OPUS";
        }
        else {
            audioCodec = audioCodec.toUpperCase();
        }
        const text = yield proposicaoService.summarizeProposicao(id);
        if (!text) {
            res.status(404).json({ error: "Proposição não encontrada" });
            return;
        }
        // If client requested to wait for audio, generate synchronously and return both
        if (waitForAudio) {
            let audioBase64 = null;
            try {
                audioBase64 = yield ttsService.synthesizeChirpAudioBase64(text, { audioEncoding: audioCodec });
            }
            catch (ttsErr) {
                console.error("[ProposicaoController] TTS error (waitForAudio):", ttsErr);
                audioBase64 = null;
            }
            res.status(200).json({ text, audioBase64 });
            return;
        }
        // Otherwise, return text immediately with a task id, and spawn the TTS job
        const task = audioTaskService.createTask();
        res.status(202).json({ text, taskId: task.id, audioStatus: task.status });
        // Spawn background TTS generation (fire-and-forget)
        (() => __awaiter(void 0, void 0, void 0, function* () {
            try {
                audioTaskService.setTaskProcessing(task.id);
                const audioBase64 = yield ttsService.synthesizeChirpAudioBase64(text, { audioEncoding: audioCodec });
                audioTaskService.setTaskCompleted(task.id, audioBase64);
            }
            catch (err) {
                const errMsg = err instanceof Error ? err.message : String(err);
                audioTaskService.setTaskFailed(task.id, errMsg);
            }
        }))();
    }
    catch (error) {
        console.error("Simplify error:", error);
        // Distinguish timeout error
        if (error instanceof Error && ((_a = error.message) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes("timeout"))) {
            res.status(504).json({ error: "Timeout ao gerar resposta do serviço externo" });
            return;
        }
        res.status(500).json({ error: "Erro ao simplificar proposição" });
    }
});
exports.simplify = simplify;
/**
 * Get all proposições (paginated)
 */
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const skip = parseInt(req.query.skip) || 0;
        const take = Math.min(parseInt(req.query.take) || 20, 100);
        const ano = req.query.ano ? parseInt(req.query.ano) : undefined;
        const siglaTipo = req.query.siglaTipo || undefined;
        const result = yield proposicaoService.getAllProposicoes(skip, take, {
            ano,
            siglaTipo,
        });
        res.status(200).json({
            data: result.data,
            pagination: {
                total: result.total,
                page: result.page,
                pages: result.pages,
                take,
            },
        });
    }
    catch (error) {
        console.error("GetAll error:", error);
        res.status(500).json({ error: "Erro ao buscar proposições" });
    }
});
exports.getAll = getAll;
/**
 * Get proposições by tipo
 */
const getByTipo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { tipo } = req.params;
        const skip = parseInt(req.query.skip) || 0;
        const take = Math.min(parseInt(req.query.take) || 20, 100);
        if (!tipo) {
            res.status(400).json({ error: "Tipo é requerido" });
            return;
        }
        const result = yield proposicaoService.getProposicoesByTipo(tipo, skip, take);
        res.status(200).json({
            data: result.data,
            pagination: {
                total: result.total,
                page: result.page,
                pages: result.pages,
                take,
            },
        });
    }
    catch (error) {
        console.error("GetByTipo error:", error);
        res.status(500).json({ error: "Erro ao buscar proposições por tipo" });
    }
});
exports.getByTipo = getByTipo;
/**
 * Get proposições by situação
 */
const getBySituacao = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { situacao } = req.params;
        const skip = parseInt(req.query.skip) || 0;
        const take = Math.min(parseInt(req.query.take) || 20, 100);
        if (!situacao) {
            res.status(400).json({ error: "Situação é requerida" });
            return;
        }
        const result = yield proposicaoService.getProposicoesBySituacao(situacao, skip, take);
        res.status(200).json({
            data: result.data,
            pagination: {
                total: result.total,
                page: result.page,
                pages: result.pages,
                take,
            },
        });
    }
    catch (error) {
        console.error("GetBySituacao error:", error);
        res.status(500).json({ error: "Erro ao buscar proposições por situação" });
    }
});
exports.getBySituacao = getBySituacao;
/**
 * Get proposições statistics
 */
const getStats = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const stats = yield proposicaoService.getProposicaoStats();
        res.status(200).json(stats);
    }
    catch (error) {
        console.error("GetStats error:", error);
        res.status(500).json({ error: "Erro ao buscar estatísticas" });
    }
});
exports.getStats = getStats;
/**
 * Get audio task status by taskId
 */
const getAudioTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { taskId } = req.params;
        if (!taskId) {
            res.status(400).json({ error: "taskId é requerido" });
            return;
        }
        const task = audioTaskService.getTask(taskId);
        if (!task) {
            res.status(404).json({ error: "Task não encontrada ou expirada" });
            return;
        }
        res.status(200).json(task);
    }
    catch (err) {
        console.error("GetAudioTask error:", err);
        res.status(500).json({ error: "Erro ao buscar Task de áudio" });
    }
});
exports.getAudioTask = getAudioTask;

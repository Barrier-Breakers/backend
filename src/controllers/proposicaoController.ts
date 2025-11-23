import { Request, Response } from "express";
import * as proposicaoService from "../services/proposicaoService";

/**
 * Search proposições by term and filters
 */
export const search = async (req: Request, res: Response): Promise<void> => {
	try {
		const searchTerm = (req.query.q as string)?.trim() || "";
		const limit = Math.min(parseInt(req.query.limit as string) || 20, 100);
		const offset = parseInt(req.query.offset as string) || 0;

		// Extract filters from query
		const filters: any = {};

		if (req.query.siglaTipo) {
			filters.siglaTipo = req.query.siglaTipo;
		}
		if (req.query.ano) {
			filters.ano = parseInt(req.query.ano as string);
		}
		if (req.query.codTipo) {
			filters.codTipo = parseInt(req.query.codTipo as string);
		}
		if (req.query.descricaoTipo) {
			filters.descricaoTipo = req.query.descricaoTipo as string;
		}
		if (req.query.codOrgao) {
			filters.codOrgao = parseInt(req.query.codOrgao as string);
		}
		if (req.query.siglaOrgao) {
			filters.siglaOrgao = req.query.siglaOrgao as string;
		}
		if (req.query.regime) {
			filters.regime = req.query.regime as string;
		}
		if (req.query.descricaoTramitacao) {
			filters.descricaoTramitacao = req.query.descricaoTramitacao as string;
		}
		if (req.query.idTipoTramitacao) {
			filters.idTipoTramitacao = parseInt(
				req.query.idTipoTramitacao as string
			);
		}
		if (req.query.descricaoSituacao) {
			filters.descricaoSituacao = req.query.descricaoSituacao as string;
		}
		if (req.query.apreciacao) {
			filters.apreciacao = req.query.apreciacao as string;
		}

		const result = await proposicaoService.searchProposicoes({
			query: searchTerm,
			filters,
			limit,
			offset,
		});

		res.status(200).json(result);
	} catch (error) {
		console.error("Search error:", error);
		res.status(500).json({ error: "Erro ao buscar proposições" });
	}
};

/**
 * Get proposição by ID
 */
export const getById = async (req: Request, res: Response): Promise<void> => {
	try {
		const id = parseInt(req.params.id);

		if (isNaN(id)) {
			res.status(400).json({ error: "ID inválido" });
			return;
		}

		const proposicao = await proposicaoService.getProposicaoById(id);

		if (!proposicao) {
			res.status(404).json({ error: "Proposição não encontrada" });
			return;
		}

		res.status(200).json(proposicao);
	} catch (error) {
		console.error("GetById error:", error);
		res.status(500).json({ error: "Erro ao buscar proposição" });
	}
};

/**
 * Simplify proposição and return text summary + audio (base64)
 */
export const simplify = async (req: Request, res: Response): Promise<void> => {
	try {
		console.log(`[REQUEST] Simplify proposição called - params:`, req.params);
		const id = parseInt(req.params.id);

		if (isNaN(id)) {
			res.status(400).json({ error: "ID inválido" });
			return;
		}

		const result = await proposicaoService.simplifyProposicao(id);
		if (!result) {
			res.status(404).json({ error: "Proposição não encontrada" });
			return;
		}

		if (!result.audioBase64) {
			// Text-only response
			res.status(200).json({ text: result.text, audioBase64: null });
			return;
		}

		res.status(200).json(result);
	} catch (error) {
		console.error("Simplify error:", error);
		// Distinguish timeout error
		if (error instanceof Error && error.message?.toLowerCase().includes("timeout")) {
			res.status(504).json({ error: "Timeout ao gerar resposta do serviço externo" });
			return;
		}
		res.status(500).json({ error: "Erro ao simplificar proposição" });
	}
};

/**
 * Get all proposições (paginated)
 */
export const getAll = async (req: Request, res: Response): Promise<void> => {
	try {
		const skip = parseInt(req.query.skip as string) || 0;
		const take = Math.min(parseInt(req.query.take as string) || 20, 100);
		const ano = req.query.ano ? parseInt(req.query.ano as string) : undefined;
		const siglaTipo = (req.query.siglaTipo as string) || undefined;

		const result = await proposicaoService.getAllProposicoes(skip, take, {
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
	} catch (error) {
		console.error("GetAll error:", error);
		res.status(500).json({ error: "Erro ao buscar proposições" });
	}
};

/**
 * Get proposições by tipo
 */
export const getByTipo = async (req: Request, res: Response): Promise<void> => {
	try {
		const { tipo } = req.params;
		const skip = parseInt(req.query.skip as string) || 0;
		const take = Math.min(parseInt(req.query.take as string) || 20, 100);

		if (!tipo) {
			res.status(400).json({ error: "Tipo é requerido" });
			return;
		}

		const result = await proposicaoService.getProposicoesByTipo(tipo, skip, take);

		res.status(200).json({
			data: result.data,
			pagination: {
				total: result.total,
				page: result.page,
				pages: result.pages,
				take,
			},
		});
	} catch (error) {
		console.error("GetByTipo error:", error);
		res.status(500).json({ error: "Erro ao buscar proposições por tipo" });
	}
};

/**
 * Get proposições by situação
 */
export const getBySituacao = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const { situacao } = req.params;
		const skip = parseInt(req.query.skip as string) || 0;
		const take = Math.min(parseInt(req.query.take as string) || 20, 100);

		if (!situacao) {
			res.status(400).json({ error: "Situação é requerida" });
			return;
		}

		const result = await proposicaoService.getProposicoesBySituacao(
			situacao,
			skip,
			take
		);

		res.status(200).json({
			data: result.data,
			pagination: {
				total: result.total,
				page: result.page,
				pages: result.pages,
				take,
			},
		});
	} catch (error) {
		console.error("GetBySituacao error:", error);
		res.status(500).json({ error: "Erro ao buscar proposições por situação" });
	}
};

/**
 * Get proposições statistics
 */
export const getStats = async (req: Request, res: Response): Promise<void> => {
	try {
		const stats = await proposicaoService.getProposicaoStats();

		res.status(200).json(stats);
	} catch (error) {
		console.error("GetStats error:", error);
		res.status(500).json({ error: "Erro ao buscar estatísticas" });
	}
};

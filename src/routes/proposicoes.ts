import { Router } from "express";
import * as proposicaoController from "../controllers/proposicaoController";
import {
	searchRateLimiter,
	proposicaoRateLimiter,
} from "../middlewares/proposicaoMiddleware";

const router = Router();

/**
 * @openapi
 * /api/proposicoes/search:
 *   get:
 *     tags:
 *       - Proposições
 *     summary: Advanced search for proposições
 *     description: Search proposições by term across keywords, ementa and despacho fields. Supports optional filters. Rate limited to 60 requests per minute.
 *     parameters:
 *       - name: q
 *         in: query
 *         description: Search term (searches in keywords, ementa, despacho)
 *         schema:
 *           type: string
 *           example: santa catarina
 *       - name: limit
 *         in: query
 *         description: Number of results (default 20, max 100)
 *         schema:
 *           type: integer
 *           default: 20
 *           maximum: 100
 *       - name: offset
 *         in: query
 *         description: Pagination offset (default 0)
 *         schema:
 *           type: integer
 *           default: 0
 *       - name: siglaTipo
 *         in: query
 *         description: Filter by proposal type sigla (e.g., PL, PEC, PDL)
 *         schema:
 *           type: string
 *           example: PL
 *       - name: ano
 *         in: query
 *         description: Filter by year
 *         schema:
 *           type: integer
 *           example: 2025
 *       - name: codTipo
 *         in: query
 *         description: Filter by proposal type code
 *         schema:
 *           type: integer
 *           example: 139
 *       - name: descricaoTipo
 *         in: query
 *         description: Filter by proposal type description
 *         schema:
 *           type: string
 *           example: Projeto de Lei
 *       - name: codOrgao
 *         in: query
 *         description: Filter by organ code
 *         schema:
 *           type: integer
 *           example: 4
 *       - name: siglaOrgao
 *         in: query
 *         description: Filter by organ sigla
 *         schema:
 *           type: string
 *           example: MESA
 *       - name: regime
 *         in: query
 *         description: Filter by processing regime
 *         schema:
 *           type: string
 *           example: "Urgência (Art. 155, RICD)"
 *       - name: descricaoTramitacao
 *         in: query
 *         description: Filter by tramitation description
 *         schema:
 *           type: string
 *           example: Transformação em Norma Jurídica
 *       - name: idTipoTramitacao
 *         in: query
 *         description: Filter by tramitation type ID
 *         schema:
 *           type: integer
 *           example: 251
 *       - name: descricaoSituacao
 *         in: query
 *         description: Filter by situation description
 *         schema:
 *           type: string
 *           example: Transformado em Norma Jurídica
 *       - name: apreciacao
 *         in: query
 *         description: Filter by appreciation type
 *         schema:
 *           type: string
 *           example: "Proposição Sujeita à Apreciação do Plenário"
 *     responses:
 *       200:
 *         description: Search results returned successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       uri:
 *                         type: string
 *                       siglaTipo:
 *                         type: string
 *                       numero:
 *                         type: integer
 *                       ano:
 *                         type: integer
 *                       ementa:
 *                         type: string
 *                       keywords:
 *                         type: string
 *                       despacho:
 *                         type: string
 *                 total:
 *                   type: integer
 *                   example: 45
 *                 limit:
 *                   type: integer
 *                   example: 20
 *                 offset:
 *                   type: integer
 *                   example: 0
 *                 pages:
 *                   type: integer
 *                   example: 3
 *                 search:
 *                   type: object
 *                   properties:
 *                     query:
 *                       type: string
 *                     hasFilters:
 *                       type: boolean
 *       400:
 *         description: Bad request (invalid parameters)
 *       429:
 *         description: Rate limit exceeded (60 requests per minute)
 *       500:
 *         description: Internal server error
 */
router.get("/search", searchRateLimiter, proposicaoController.search);

/**
 * @openapi
 * /api/proposicoes/stats/geral:
 *   get:
 *     tags:
 *       - Proposições
 *     summary: Get proposições statistics
 *     description: Returns aggregated statistics about proposições including counts by year, type, and situation. Rate limited to 30 requests per minute.
 *     responses:
 *       200:
 *         description: Statistics retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 total:
 *                   type: integer
 *                   example: 94864
 *                 porAno:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       ano:
 *                         type: integer
 *                       _count:
 *                         type: integer
 *                 porTipo:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       siglaTipo:
 *                         type: string
 *                       _count:
 *                         type: integer
 *                 porSituacao:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       descricaoSituacao:
 *                         type: string
 *                       _count:
 *                         type: integer
 *       429:
 *         description: Rate limit exceeded (30 requests per minute)
 *       500:
 *         description: Internal server error
 */
router.get("/stats/geral", proposicaoRateLimiter, proposicaoController.getStats);

/**
 * @openapi
 * /api/proposicoes/situacao/{situacao}:
 *   get:
 *     tags:
 *       - Proposições
 *     summary: Get proposições by situation description
 *     description: Retrieve proposições filtered by situation description (case-insensitive). Rate limited to 30 requests per minute.
 *     parameters:
 *       - name: situacao
 *         in: path
 *         required: true
 *         description: Situation description to filter by
 *         schema:
 *           type: string
 *           example: Transformado em Norma Jurídica
 *       - name: skip
 *         in: query
 *         description: Pagination skip (default 0)
 *         schema:
 *           type: integer
 *           default: 0
 *       - name: take
 *         in: query
 *         description: Number of results (default 20, max 100)
 *         schema:
 *           type: integer
 *           default: 20
 *           maximum: 100
 *     responses:
 *       200:
 *         description: Proposições retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                 pagination:
 *                   type: object
 *                   properties:
 *                     total:
 *                       type: integer
 *                     page:
 *                       type: integer
 *                     pages:
 *                       type: integer
 *       400:
 *         description: Bad request (missing situacao)
 *       429:
 *         description: Rate limit exceeded (30 requests per minute)
 *       500:
 *         description: Internal server error
 */
router.get(
	"/situacao/:situacao",
	proposicaoRateLimiter,
	proposicaoController.getBySituacao
);

/**
 * @openapi
 * /api/proposicoes/tipo/{tipo}:
 *   get:
 *     tags:
 *       - Proposições
 *     summary: Get proposições by type
 *     description: Retrieve proposições filtered by proposal type sigla (e.g., PL, PEC, PDL). Rate limited to 30 requests per minute.
 *     parameters:
 *       - name: tipo
 *         in: path
 *         required: true
 *         description: Proposal type sigla
 *         schema:
 *           type: string
 *           example: PL
 *       - name: skip
 *         in: query
 *         description: Pagination skip (default 0)
 *         schema:
 *           type: integer
 *           default: 0
 *       - name: take
 *         in: query
 *         description: Number of results (default 20, max 100)
 *         schema:
 *           type: integer
 *           default: 20
 *           maximum: 100
 *     responses:
 *       200:
 *         description: Proposições retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                 pagination:
 *                   type: object
 *                   properties:
 *                     total:
 *                       type: integer
 *                     page:
 *                       type: integer
 *                     pages:
 *                       type: integer
 *       400:
 *         description: Bad request (missing tipo)
 *       429:
 *         description: Rate limit exceeded (30 requests per minute)
 *       500:
 *         description: Internal server error
 */
router.get(
	"/tipo/:tipo",
	proposicaoRateLimiter,
	proposicaoController.getByTipo
);

/**
 * @openapi
 * /api/proposicoes/{id}:
 *   get:
 *     tags:
 *       - Proposições
 *     summary: Get proposição by ID
 *     description: Retrieve a specific proposição by its unique ID. Rate limited to 30 requests per minute.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Proposição ID
 *         schema:
 *           type: integer
 *           example: 2481874
 *     responses:
 *       200:
 *         description: Proposição retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 uri:
 *                   type: string
 *                 siglaTipo:
 *                   type: string
 *                 numero:
 *                   type: integer
 *                 ano:
 *                   type: integer
 *                 ementa:
 *                   type: string
 *                 keywords:
 *                   type: string
 *                 despacho:
 *                   type: string
 *       400:
 *         description: Bad request (invalid ID)
 *       404:
 *         description: Proposição not found
 *       429:
 *         description: Rate limit exceeded (30 requests per minute)
 *       500:
 *         description: Internal server error
 */
router.get("/:id", proposicaoRateLimiter, proposicaoController.getById);

/**
 * @openapi
 * /api/proposicoes:
 *   get:
 *     tags:
 *       - Proposições
 *     summary: Get all proposições (paginated)
 *     description: Retrieve all proposições with optional filters and pagination. Rate limited to 30 requests per minute.
 *     parameters:
 *       - name: skip
 *         in: query
 *         description: Pagination skip (default 0)
 *         schema:
 *           type: integer
 *           default: 0
 *       - name: take
 *         in: query
 *         description: Number of results (default 20, max 100)
 *         schema:
 *           type: integer
 *           default: 20
 *           maximum: 100
 *       - name: ano
 *         in: query
 *         description: Filter by year
 *         schema:
 *           type: integer
 *           example: 2025
 *       - name: siglaTipo
 *         in: query
 *         description: Filter by proposal type sigla
 *         schema:
 *           type: string
 *           example: PL
 *     responses:
 *       200:
 *         description: Proposições retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                 pagination:
 *                   type: object
 *                   properties:
 *                     total:
 *                       type: integer
 *                       example: 94864
 *                     page:
 *                       type: integer
 *                       example: 1
 *                     pages:
 *                       type: integer
 *                       example: 4743
 *                     take:
 *                       type: integer
 *                       example: 20
 *       400:
 *         description: Bad request (invalid parameters)
 *       429:
 *         description: Rate limit exceeded (30 requests per minute)
 *       500:
 *         description: Internal server error
 */
router.get("/", proposicaoRateLimiter, proposicaoController.getAll);

export default router;

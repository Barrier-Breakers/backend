import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import * as denunciaController from "../controllers/denunciaController";

const router = Router();

/**
 * @openapi
 * /api/denuncias:
 *   get:
 *     tags:
 *       - Denuncias
 *     summary: Get denuncias by radius or all if no coordinates provided
 *     parameters:
 *       - in: query
 *         name: lat
 *         schema:
 *           type: number
 *       - in: query
 *         name: lng
 *         schema:
 *           type: number
 *       - in: query
 *         name: radius
 *         schema:
 *           type: integer
 *           default: 2000
 *       - in: query
 *         name: skip
 *         schema:
 *           type: integer
 *           default: 0
 *       - in: query
 *         name: take
 *         schema:
 *           type: integer
 *           default: 20
 *       - in: query
 *         name: userId
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of denuncias and total
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 denuncias:
 *                   type: array
 *                   items:
 *                     type: object
 *                 total:
 *                   type: integer
 */
router.get("/", denunciaController.list);

/**
 * @openapi
 * /api/denuncias:
 *   post:
 *     tags:
 *       - Denuncias
 *     summary: Create a new denuncia
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *               - titulo
 *               - lat
 *               - lng
 *             required:
 *               - titulo
 *             properties:
 *               # The authenticated user (via Bearer token) will be used as the author of the denuncia
 *               titulo:
 *                 type: string
 *               descricao:
 *                 type: string
 *               medias:
 *                 type: array
 *                 items:
 *                   type: string
 *               tags:
 *                 type: array
 *                 items:
 *                   type: string
 *               lat:
 *                 type: number
 *               lng:
 *                 type: number
 *     responses:
 *       201:
 *         description: Denuncia created
 *     security:
 *       - bearerAuth: []
 */
// Protected: create denuncia via authenticated user (token)
router.post("/", authMiddleware, denunciaController.create);

/**
 * @openapi
 * /api/denuncias/mock:
 *   post:
 *     tags:
 *       - Denuncias
 *     summary: Create multiple mock denuncias around specified coordinates
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - lat
 *               - lng
 *             properties:
 *               # The authenticated user (via Bearer token) will be used as the author of the mock denuncias
 *               lat:
 *                 type: number
 *               lng:
 *                 type: number
 *               count:
 *                 type: integer
 *                 default: 10
 *                 description: Number of mocks to create
 *     responses:
 *       201:
 *         description: Mock denuncias created
 *     security:
 *       - bearerAuth: []
 */
// Protected: create mock denuncias (assigns to authenticated user)
router.post("/mock", authMiddleware, denunciaController.createMock);

/**
 * @openapi
 * /api/denuncias/{id}/comments:
 *   post:
 *     tags:
 *       - Denuncias
 *     summary: Add a comment to a denuncia
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *               - texto
 *             properties:
 *             required:
 *               - texto
 *               texto:
 *                 type: string
 *               medias:
 *                 type: array
 *                 items:
 *                   type: string
 *               # The authenticated user (via Bearer token) will be used as the author of the comment
 *     responses:
 *       201:
 *         description: Comment added
 *     security:
 *       - bearerAuth: []
 */
// Protected: add comment with authenticated user
router.post("/:id/comments", authMiddleware, denunciaController.addComment);

export default router;

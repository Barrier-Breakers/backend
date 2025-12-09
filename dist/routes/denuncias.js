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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const denunciaController = __importStar(require("../controllers/denunciaController"));
const router = (0, express_1.Router)();
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
router.post("/", authMiddleware_1.authMiddleware, denunciaController.create);
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
router.post("/mock", authMiddleware_1.authMiddleware, denunciaController.createMock);
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
router.post("/:id/comments", authMiddleware_1.authMiddleware, denunciaController.addComment);
exports.default = router;

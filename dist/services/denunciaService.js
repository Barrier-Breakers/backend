"use strict";
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
exports.DenunciaService = void 0;
const prisma_1 = __importDefault(require("../db/prisma"));
const crypto_1 = require("crypto");
class DenunciaService {
    static createDenuncia(userId_1, titulo_1, descricao_1) {
        return __awaiter(this, arguments, void 0, function* (userId, titulo, descricao, medias = [], tags = [], lat, lng) {
            try {
                const id = (0, crypto_1.randomUUID)();
                // Use raw SQL to set geography location with ST_MakePoint
                yield prisma_1.default.$executeRaw `
        INSERT INTO denuncias (id, "userId", titulo, descricao, medias, status, tags, location, upvotes, downvotes, "createdAt", "updatedAt")
        VALUES (${id}, ${userId}, ${titulo}, ${descricao}, ${medias}, 'aberta', ${tags}, ST_MakePoint(${lng}, ${lat})::geography, 0, 0, now(), now())
      `;
                return { id };
            }
            catch (error) {
                console.error("Error creating denuncia:", error);
                throw error;
            }
        });
    }
    static getDenunciasInRadius(userId_1, lat_1, lng_1) {
        return __awaiter(this, arguments, void 0, function* (userId, lat, lng, radiusMeters = 2000, skip = 0, take = 20) {
            try {
                if (lat == null || lng == null) {
                    const [rows, total] = yield Promise.all([
                        prisma_1.default.$queryRaw `SELECT * FROM denuncias ORDER BY "createdAt" DESC LIMIT ${take} OFFSET ${skip}`,
                        prisma_1.default.$queryRaw `SELECT COUNT(*)::int FROM denuncias`,
                    ]);
                    // attach comments for each denuncia
                    const ids = rows.map((r) => r.id);
                    let comments = [];
                    if (ids.length > 0) {
                        comments = yield prisma_1.default.denunciaComentario.findMany({
                            where: { denunciaId: { in: ids } },
                            orderBy: { createdAt: "asc" },
                        });
                    }
                    const commentsById = {};
                    for (const c of comments) {
                        commentsById[c.denunciaId] = commentsById[c.denunciaId] || [];
                        commentsById[c.denunciaId].push(c);
                    }
                    const rowsWithComments = rows.map((r) => (Object.assign(Object.assign({}, r), { comentarios: commentsById[r.id] || [], mine: userId && r.userId === userId ? "yes" : undefined })));
                    return {
                        denuncias: rowsWithComments,
                        total: total[0].count,
                    };
                }
                const rows = yield prisma_1.default.$queryRaw `
	        SELECT * FROM denuncias WHERE "userId" = ${userId} OR ST_DWithin(location, ST_MakePoint(${lng}, ${lat})::geography, ${radiusMeters}) ORDER BY "createdAt" DESC LIMIT ${take} OFFSET ${skip}
	      `;
                // attach comments for each denuncia
                const ids = rows.map((r) => r.id);
                let comments = [];
                if (ids.length > 0) {
                    comments = yield prisma_1.default.denunciaComentario.findMany({
                        where: { denunciaId: { in: ids } },
                        orderBy: { createdAt: "asc" },
                    });
                }
                const commentsById = {};
                for (const c of comments) {
                    commentsById[c.denunciaId] = commentsById[c.denunciaId] || [];
                    commentsById[c.denunciaId].push(c);
                }
                const rowsWithComments = rows.map((r) => (Object.assign(Object.assign({}, r), { comentarios: commentsById[r.id] || [], mine: userId && r.userId === userId ? "yes" : undefined })));
                const totalRes = yield prisma_1.default.$queryRaw `
        SELECT COUNT(*)::int AS count FROM denuncias WHERE "userId" = ${userId} OR ST_DWithin(location, ST_MakePoint(${lng}, ${lat})::geography, ${radiusMeters})
      `;
                return { denuncias: rowsWithComments, total: totalRes[0].count };
            }
            catch (error) {
                console.error("Error fetching denuncias:", error);
                throw error;
            }
        });
    }
    static addComment(denunciaId_1, userId_1, texto_1) {
        return __awaiter(this, arguments, void 0, function* (denunciaId, userId, texto, medias = []) {
            try {
                return yield prisma_1.default.denunciaComentario.create({
                    data: {
                        id: (0, crypto_1.randomUUID)(),
                        denunciaId,
                        userId,
                        texto,
                        medias,
                    },
                });
            }
            catch (error) {
                console.error("Error adding comment:", error);
                throw error;
            }
        });
    }
    static randomBetween(min, max) {
        return Math.random() * (max - min) + min;
    }
    static offsetLatLng(lat, lng, distanceMeters, bearingRadians) {
        const R = 6378137; // Earth radius in meters
        const dDivR = distanceMeters / R;
        const lat1 = (lat * Math.PI) / 180;
        const lng1 = (lng * Math.PI) / 180;
        const lat2 = Math.asin(Math.sin(lat1) * Math.cos(dDivR) + Math.cos(lat1) * Math.sin(dDivR) * Math.cos(bearingRadians));
        const lng2 = lng1 + Math.atan2(Math.sin(bearingRadians) * Math.sin(dDivR) * Math.cos(lat1), Math.cos(dDivR) - Math.sin(lat1) * Math.sin(lat2));
        return [(lat2 * 180) / Math.PI, (lng2 * 180) / Math.PI];
    }
    static createMockDenuncias(userId_1, lat_1, lng_1) {
        return __awaiter(this, arguments, void 0, function* (userId, lat, lng, count = 10, minDistanceMeters = 10, maxDistanceMeters = 100) {
            try {
                let actualUserId = userId;
                if (!actualUserId) {
                    const user = yield prisma_1.default.user.findFirst();
                    if (!user)
                        throw new Error("No user found. Provide a valid userId in the request body.");
                    actualUserId = user.id;
                }
                const createdIds = [];
                for (let i = 0; i < count; i++) {
                    const distance = Math.round(this.randomBetween(minDistanceMeters, maxDistanceMeters));
                    const bearing = this.randomBetween(0, Math.PI * 2);
                    const [newLat, newLng] = this.offsetLatLng(lat, lng, distance, bearing);
                    const titulo = `Mock Denúncia ${i + 1}`;
                    const descricao = `Denúncia mock gerada automaticamente a ~${distance}m do ponto fornecido.`;
                    const { id } = yield this.createDenuncia(actualUserId, titulo, descricao, [], ["mock"], newLat, newLng);
                    createdIds.push(id);
                }
                return { created: createdIds.length, ids: createdIds };
            }
            catch (error) {
                console.error("Error creating mock denuncias:", error);
                throw error;
            }
        });
    }
}
exports.DenunciaService = DenunciaService;

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
exports.DenunciaService = exports.PostService = exports.UserService = void 0;
const prisma_1 = __importDefault(require("../db/prisma"));
class UserService {
    /**
     * Get a user by ID
     */
    static getUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield prisma_1.default.user.findUnique({
                    where: { id: userId },
                    include: {
                        posts: true,
                        sessions: true,
                    },
                });
            }
            catch (error) {
                console.error("Error fetching user:", error);
                throw error;
            }
        });
    }
    /**
     * Get a user by email
     */
    static getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield prisma_1.default.user.findUnique({
                    where: { email },
                });
            }
            catch (error) {
                console.error("Error fetching user by email:", error);
                throw error;
            }
        });
    }
    /**
     * Create a new user
     */
    static createUser(id, email, name, avatar) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield prisma_1.default.user.create({
                    data: {
                        id,
                        email,
                        name,
                        avatar,
                        race: null,
                        gender: null,
                        ageRange: null,
                        interestTopics: [],
                    },
                });
            }
            catch (error) {
                console.error("Error creating user:", error);
                throw error;
            }
        });
    }
    /**
     * Update a user
     */
    static updateUser(userId, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield prisma_1.default.user.update({
                    where: { id: userId },
                    data,
                });
            }
            catch (error) {
                console.error("Error updating user:", error);
                throw error;
            }
        });
    }
    /**
     * Delete a user
     */
    static deleteUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield prisma_1.default.user.delete({
                    where: { id: userId },
                });
            }
            catch (error) {
                console.error("Error deleting user:", error);
                throw error;
            }
        });
    }
    /**
     * Get all users (paginated)
     */
    static getAllUsers() {
        return __awaiter(this, arguments, void 0, function* (skip = 0, take = 10) {
            try {
                const [users, total] = yield Promise.all([
                    prisma_1.default.user.findMany({
                        skip,
                        take,
                        include: {
                            _count: {
                                select: { posts: true, comments: true },
                            },
                        },
                    }),
                    prisma_1.default.user.count(),
                ]);
                return {
                    users,
                    total,
                    page: Math.floor(skip / take) + 1,
                    pages: Math.ceil(total / take),
                };
            }
            catch (error) {
                console.error("Error fetching all users:", error);
                throw error;
            }
        });
    }
}
exports.UserService = UserService;
class PostService {
    /**
     * Get a post by ID
     */
    static getPostById(postId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield prisma_1.default.post.findUnique({
                    where: { id: postId },
                    include: {
                        user: true,
                        comments: {
                            include: {
                                user: true,
                            },
                        },
                    },
                });
            }
            catch (error) {
                console.error("Error fetching post:", error);
                throw error;
            }
        });
    }
    /**
     * Get all posts by a user
     */
    static getPostsByUserId(userId_1) {
        return __awaiter(this, arguments, void 0, function* (userId, skip = 0, take = 10) {
            try {
                const [posts, total] = yield Promise.all([
                    prisma_1.default.post.findMany({
                        where: { userId },
                        skip,
                        take,
                        include: {
                            user: true,
                            _count: {
                                select: { comments: true },
                            },
                        },
                        orderBy: { createdAt: "desc" },
                    }),
                    prisma_1.default.post.count({ where: { userId } }),
                ]);
                return {
                    posts,
                    total,
                    page: Math.floor(skip / take) + 1,
                    pages: Math.ceil(total / take),
                };
            }
            catch (error) {
                console.error("Error fetching user posts:", error);
                throw error;
            }
        });
    }
    /**
     * Create a new post
     */
    static createPost(userId, title, content) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield prisma_1.default.post.create({
                    data: {
                        title,
                        content,
                        userId,
                    },
                    include: {
                        user: true,
                    },
                });
            }
            catch (error) {
                console.error("Error creating post:", error);
                throw error;
            }
        });
    }
    /**
     * Update a post
     */
    static updatePost(postId, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield prisma_1.default.post.update({
                    where: { id: postId },
                    data,
                    include: {
                        user: true,
                    },
                });
            }
            catch (error) {
                console.error("Error updating post:", error);
                throw error;
            }
        });
    }
    /**
     * Delete a post
     */
    static deletePost(postId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield prisma_1.default.post.delete({
                    where: { id: postId },
                });
            }
            catch (error) {
                console.error("Error deleting post:", error);
                throw error;
            }
        });
    }
    /**
     * Get all posts (paginated)
     */
    static getAllPosts() {
        return __awaiter(this, arguments, void 0, function* (skip = 0, take = 10) {
            try {
                const [posts, total] = yield Promise.all([
                    prisma_1.default.post.findMany({
                        skip,
                        take,
                        include: {
                            user: true,
                            _count: {
                                select: { comments: true },
                            },
                        },
                        orderBy: { createdAt: "desc" },
                    }),
                    prisma_1.default.post.count(),
                ]);
                return {
                    posts,
                    total,
                    page: Math.floor(skip / take) + 1,
                    pages: Math.ceil(total / take),
                };
            }
            catch (error) {
                console.error("Error fetching all posts:", error);
                throw error;
            }
        });
    }
}
exports.PostService = PostService;
class DenunciaService {
    static createDenuncia(userId_1, titulo_1, descricao_1) {
        return __awaiter(this, arguments, void 0, function* (userId, titulo, descricao, medias = [], tags = [], lat, lng) {
            try {
                const id = require("crypto").randomUUID();
                // Use raw SQL to set geography location with ST_MakePoint
                const result = yield prisma_1.default.$executeRaw `
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
                    return { denuncias: rows, total: total[0].count };
                }
                const rows = yield prisma_1.default.$queryRaw `
				SELECT * FROM denuncias WHERE "userId" = ${userId} OR ST_DWithin(location, ST_MakePoint(${lng}, ${lat})::geography, ${radiusMeters}) ORDER BY "createdAt" DESC LIMIT ${take} OFFSET ${skip}
			`;
                const totalRes = yield prisma_1.default.$queryRaw `
				SELECT COUNT(*)::int AS count FROM denuncias WHERE "userId" = ${userId} OR ST_DWithin(location, ST_MakePoint(${lng}, ${lat})::geography, ${radiusMeters})
			`;
                return { denuncias: rows, total: totalRes[0].count };
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
                    data: { id: require("crypto").randomUUID(), denunciaId, userId, texto, medias },
                });
            }
            catch (error) {
                console.error("Error adding comment:", error);
                throw error;
            }
        });
    }
}
exports.DenunciaService = DenunciaService;

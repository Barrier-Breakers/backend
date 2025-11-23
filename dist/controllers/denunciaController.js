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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMock = exports.addComment = exports.create = exports.list = void 0;
const denunciaService_1 = require("../services/denunciaService");
const dbService_1 = require("../services/dbService");
const list = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const lat = req.query.lat ? parseFloat(req.query.lat) : null;
        const lng = req.query.lng ? parseFloat(req.query.lng) : null;
        const radius = parseInt(req.query.radius || "2000");
        const skip = parseInt(req.query.skip || "0");
        const take = parseInt(req.query.take || "20");
        // Determine logged-in user ID, if provided by Authorization header (optional)
        let loggedInUserId = req.query.userId ? req.query.userId : null;
        const authHeader = req.headers.authorization;
        if (authHeader && authHeader.startsWith("Bearer ")) {
            try {
                const token = authHeader.substring(7);
                const supabase = req.app.locals.supabase;
                if (supabase) {
                    const { data } = yield supabase.auth.getUser(token);
                    if (data && data.user) {
                        loggedInUserId = data.user.id;
                    }
                }
            }
            catch (err) {
                // If token invalid or supabase fails, we'll silently ignore and use query param or null
                console.warn("Optional auth failed while fetching logged-in user:", err);
            }
        }
        const result = yield denunciaService_1.DenunciaService.getDenunciasInRadius(loggedInUserId, lat, lng, radius, skip, take);
        res.status(200).json(result);
    }
    catch (error) {
        console.error("DenunciaController.list error:", error);
        res.status(500).json({ error: "Failed to fetch denuncias" });
    }
});
exports.list = list;
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e;
    try {
        const { titulo, descricao, medias, tags, lat, lng } = req.body;
        const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
        if (userId) {
            // Ensure local DB user exists for authenticated supabase user
            const dbUser = yield dbService_1.UserService.getUserById(userId);
            if (!dbUser) {
                const name = ((_c = (_b = req.user) === null || _b === void 0 ? void 0 : _b.user_metadata) === null || _c === void 0 ? void 0 : _c.display_name) || ((_d = req.user) === null || _d === void 0 ? void 0 : _d.email) || "";
                try {
                    yield dbService_1.UserService.createUser(userId, ((_e = req.user) === null || _e === void 0 ? void 0 : _e.email) || "", name);
                }
                catch (dbErr) {
                    console.warn("Failed to create local DB user for authenticated user:", dbErr);
                }
            }
        }
        if (!userId) {
            res.status(401).json({ error: "Unauthenticated. Provide a valid token." });
            return;
        }
        if (!titulo || lat == null || lng == null) {
            res.status(400).json({ error: "titulo, lat and lng are required" });
            return;
        }
        const result = yield denunciaService_1.DenunciaService.createDenuncia(userId, titulo, descricao !== null && descricao !== void 0 ? descricao : null, medias !== null && medias !== void 0 ? medias : [], tags !== null && tags !== void 0 ? tags : [], lat, lng);
        res.status(201).json(result);
    }
    catch (error) {
        console.error("DenunciaController.create error:", error);
        res.status(500).json({ error: "Failed to create denuncia" });
    }
});
exports.create = create;
const addComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e;
    try {
        const denunciaId = req.params.id;
        const { texto, medias } = req.body;
        const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
        if (userId) {
            const dbUser = yield dbService_1.UserService.getUserById(userId);
            if (!dbUser) {
                const name = ((_c = (_b = req.user) === null || _b === void 0 ? void 0 : _b.user_metadata) === null || _c === void 0 ? void 0 : _c.display_name) || ((_d = req.user) === null || _d === void 0 ? void 0 : _d.email) || "";
                try {
                    yield dbService_1.UserService.createUser(userId, ((_e = req.user) === null || _e === void 0 ? void 0 : _e.email) || "", name);
                }
                catch (dbErr) {
                    console.warn("Failed to create local DB user for comment author:", dbErr);
                }
            }
        }
        if (!userId || !texto) {
            res.status(400).json({ error: "texto is required and token must be provided" });
            return;
        }
        const comment = yield denunciaService_1.DenunciaService.addComment(denunciaId, userId, texto, medias !== null && medias !== void 0 ? medias : []);
        res.status(201).json(comment);
    }
    catch (error) {
        console.error("DenunciaController.addComment error:", error);
        res.status(500).json({ error: "Failed to add comment" });
    }
});
exports.addComment = addComment;
const createMock = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e;
    try {
        const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
        const { lat, lng } = req.body;
        const count = req.body.count ? parseInt(req.body.count) : 10;
        if (lat == null || lng == null) {
            res.status(400).json({ error: "lat and lng are required" });
            return;
        }
        if (isNaN(count) || count <= 0 || count > 1000) {
            res.status(400).json({ error: "count must be a positive integer up to 1000" });
            return;
        }
        if (!userId) {
            res.status(401).json({ error: "Unauthenticated. Provide a valid token." });
            return;
        }
        // Ensure local DB user exists
        const dbUser = yield dbService_1.UserService.getUserById(userId);
        if (!dbUser) {
            const name = ((_c = (_b = req.user) === null || _b === void 0 ? void 0 : _b.user_metadata) === null || _c === void 0 ? void 0 : _c.display_name) || ((_d = req.user) === null || _d === void 0 ? void 0 : _d.email) || "";
            try {
                yield dbService_1.UserService.createUser(userId, ((_e = req.user) === null || _e === void 0 ? void 0 : _e.email) || "", name);
            }
            catch (dbErr) {
                console.warn("Failed to create local DB user for mock creation:", dbErr);
            }
        }
        const result = yield denunciaService_1.DenunciaService.createMockDenuncias(userId, parseFloat(lat), parseFloat(lng), count);
        res.status(201).json(result);
    }
    catch (error) {
        console.error("DenunciaController.createMock error:", error);
        res.status(500).json({ error: "Failed to create mock denuncias" });
    }
});
exports.createMock = createMock;

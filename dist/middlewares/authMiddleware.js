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
exports.authMiddleware = void 0;
const authMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const supabase = req.app.locals.supabase;
        if (!supabase) {
            res.status(500).json({ error: "Supabase client not initialized" });
            return;
        }
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            res.status(401).json({ error: "Missing or invalid authorization header" });
            return;
        }
        const token = authHeader.substring(7);
        const { data, error } = yield supabase.auth.getUser(token);
        if (error || !data.user) {
            res.status(401).json({ error: "Invalid or expired token" });
            return;
        }
        req.user = Object.assign({ id: data.user.id, email: data.user.email, aud: data.user.aud, role: data.user.role }, data.user.user_metadata);
        next();
    }
    catch (err) {
        console.error("Auth middleware error:", err);
        res.status(401).json({ error: "Authentication failed" });
    }
});
exports.authMiddleware = authMiddleware;

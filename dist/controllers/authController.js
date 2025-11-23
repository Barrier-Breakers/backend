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
exports.logout = exports.getMe = exports.signInWithGoogle = exports.signIn = exports.signUp = void 0;
const authService = __importStar(require("../services/authService"));
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const supabase = req.app.locals.supabase;
        const { email, password } = req.body;
        if (!supabase) {
            res.status(500).json({ error: "Supabase client not initialized" });
            return;
        }
        if (!email || !password) {
            res.status(400).json({ error: "Email and password are required" });
            return;
        }
        const { data, error } = yield authService.signUp(supabase, {
            email,
            password,
        });
        if (error) {
            res.status(400).json({ error: error.message });
            return;
        }
        res.status(201).json({
            message: "User registered successfully",
            user: data.user,
            session: data.session,
        });
    }
    catch (err) {
        console.error("SignUp error:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.signUp = signUp;
const signIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const supabase = req.app.locals.supabase;
        const { email, password } = req.body;
        if (!supabase) {
            res.status(500).json({ error: "Supabase client not initialized" });
            return;
        }
        if (!email || !password) {
            res.status(400).json({ error: "Email and password are required" });
            return;
        }
        const { data, error } = yield authService.signIn(supabase, {
            email,
            password,
        });
        if (error) {
            res.status(401).json({ error: error.message });
            return;
        }
        res.status(200).json({
            message: "Login successful",
            user: data.user,
            session: data.session,
        });
    }
    catch (err) {
        console.error("SignIn error:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.signIn = signIn;
const signInWithGoogle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const supabase = req.app.locals.supabase;
        // Get redirectTo from body, or use APP_URL from env
        const redirectTo = req.body.redirectTo || `${process.env.APP_URL || "http://localhost:3000"}/auth/callback`;
        if (!supabase) {
            res.status(500).json({ error: "Supabase client not initialized" });
            return;
        }
        const { data, error } = yield authService.signInWithGoogle(supabase, {
            redirectTo,
        });
        if (error) {
            res.status(400).json({ error: error.message });
            return;
        }
        res.status(200).json({
            message: "Google auth URL generated",
            url: data.url,
            redirectTo,
        });
    }
    catch (err) {
        console.error("Google SignIn error:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.signInWithGoogle = signInWithGoogle;
const getMe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.user) {
            res.status(401).json({ error: "User not authenticated" });
            return;
        }
        res.status(200).json({
            message: "Current user",
            user: req.user,
        });
    }
    catch (err) {
        console.error("GetMe error:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.getMe = getMe;
const logout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const supabase = req.app.locals.supabase;
        if (!supabase) {
            res.status(500).json({ error: "Supabase client not initialized" });
            return;
        }
        if (!req.user) {
            res.status(401).json({ error: "User not authenticated" });
            return;
        }
        // Sign out from Supabase
        const { error } = yield authService.signOut(supabase);
        if (error) {
            console.error("Supabase logout error:", error);
        }
        res.status(200).json({
            message: "Logout successful",
            user: req.user.email,
        });
    }
    catch (err) {
        console.error("Logout error:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.logout = logout;

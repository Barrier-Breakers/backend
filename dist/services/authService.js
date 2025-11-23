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
exports.signOut = exports.getUserByToken = exports.signInWithGoogle = exports.signIn = exports.signUp = void 0;
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const signUp = (supabase, payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield supabase.auth.signUp({
        email: payload.email,
        password: payload.password,
        options: {
            data: {
                display_name: payload.name,
            },
        },
    });
});
exports.signUp = signUp;
const signIn = (supabase, payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield supabase.auth.signInWithPassword({
        email: payload.email,
        password: payload.password,
    });
});
exports.signIn = signIn;
const signInWithGoogle = (supabase, payload) => __awaiter(void 0, void 0, void 0, function* () {
    // Build callback URL with priority:
    // 1. Explicitly provided redirectTo
    // 2. APP_URL from environment
    // 3. Fallback to localhost (development only)
    const redirectTo = payload.redirectTo ||
        process.env.APP_URL ||
        "http://localhost:3000";
    // Ensure the callback path is appended
    const callbackUrl = redirectTo.endsWith("/auth/callback")
        ? redirectTo
        : `${redirectTo}/auth/callback`;
    console.log("[Google OAuth] Redirect URL configured:", callbackUrl);
    return yield supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
            redirectTo: callbackUrl,
            skipBrowserRedirect: false,
        },
    });
});
exports.signInWithGoogle = signInWithGoogle;
const getUserByToken = (supabase, token) => __awaiter(void 0, void 0, void 0, function* () {
    return yield supabase.auth.getUser(token);
});
exports.getUserByToken = getUserByToken;
const signOut = (supabase) => __awaiter(void 0, void 0, void 0, function* () {
    return yield supabase.auth.signOut();
});
exports.signOut = signOut;

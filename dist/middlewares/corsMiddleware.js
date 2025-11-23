"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupCors = void 0;
const cors_1 = __importDefault(require("cors"));
/**
 * CORS Configuration
 * Define allowed origins, methods, and headers for cross-origin requests
 */
// Allowed origins for CORS
const ALLOWED_ORIGINS = [
    // Development
    "http://localhost:3000",
    "http://localhost:3001",
    "http://localhost:4000",
    "http://127.0.0.1:3000",
    "http://127.0.0.1:4000",
    // Dev Tunnels (Microsoft Dev Tunnels)
    "https://4d8wf50z-3000.brs.devtunnels.ms",
    "https://4d8wf50z-4000.brs.devtunnels.ms",
    "https://4d8wf50z-4000.brs.devtunnels.ms/",
    "*",
    // Add production URLs here when ready
    "https://legistlai-frontend.vercel.app",
    // "https://app.yourdomain.com",
];
// HTTP methods allowed
const ALLOWED_METHODS = ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"];
// Headers allowed in requests
const ALLOWED_HEADERS = ["Content-Type", "Authorization"];
const setupCors = (app) => {
    const corsOptions = {
        origin: (origin, callback) => {
            // Allow requests with no origin (like mobile apps or curl requests)
            if (!origin) {
                callback(null, true);
                return;
            }
            // Check if origin is in allowed list
            if (ALLOWED_ORIGINS.includes(origin)) {
                callback(null, true);
            }
            else {
                console.warn(`CORS rejected: ${origin}`);
                callback(new Error("Not allowed by CORS"));
            }
        },
        credentials: true,
        methods: ALLOWED_METHODS,
        allowedHeaders: ALLOWED_HEADERS,
        exposedHeaders: ["X-RateLimit-Limit", "X-RateLimit-Remaining", "X-RateLimit-Reset"],
        optionsSuccessStatus: 200,
        maxAge: 86400, // 24 hours
    };
    app.use((0, cors_1.default)(corsOptions));
};
exports.setupCors = setupCors;

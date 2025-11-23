import cors from "cors";
import { Express } from "express";

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
	"https://4d8wf50z-3000.brs.devtunnels.ms/",
	"https://4d8wf50z-4000.brs.devtunnels.ms",
	"https://4d8wf50z-4000.brs.devtunnels.ms/",
	"*",

	// Add production URLs here when ready
	"https://legisla-ai.vercel.app",
	// "https://app.yourdomain.com",
];

// HTTP methods allowed
const ALLOWED_METHODS = ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"];

// Headers allowed in requests
const ALLOWED_HEADERS = ["Content-Type", "Authorization"];

export const setupCors = (app: Express): void => {
	const corsOptions = {
		origin: (
			origin: string | undefined,
			callback: (err: Error | null, allow?: boolean) => void,
		) => {
			// Allow requests with no origin (like mobile apps or curl requests)
			if (!origin) {
				callback(null, true);
				return;
			}

			// Check if origin is in allowed list
			if (ALLOWED_ORIGINS.includes(origin)) {
				callback(null, true);
			} else {
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

	app.use(cors(corsOptions));
};

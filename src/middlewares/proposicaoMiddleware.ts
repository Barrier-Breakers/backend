import { Request, Response, NextFunction } from "express";
import { createRateLimiter } from "../utils/redisRateLimiter";

/**
 * Rate limiter for search operations
 * 60 requests per 60 seconds per IP
 */
export const searchRateLimiter = createRateLimiter({
	keyPrefix: "proposicoes:search",
	windowSec: 60,
	max: 60,
	keyGenerator: (req: Request) => {
		return (
			req.ip ||
			(req.headers["x-forwarded-for"] as string)?.split(",")[0].trim() ||
			(req.headers["x-real-ip"] as string) ||
			(req.socket as any).remoteAddress ||
			"global"
		);
	},
});

/**
 * Rate limiter for general proposições operations
 * 30 requests per 60 seconds per IP
 */
export const proposicaoRateLimiter = createRateLimiter({
	keyPrefix: "proposicoes:general",
	windowSec: 60,
	max: 60,
	keyGenerator: (req: Request) => {
		return (
			req.ip ||
			(req.headers["x-forwarded-for"] as string)?.split(",")[0].trim() ||
			(req.headers["x-real-ip"] as string) ||
			(req.socket as any).remoteAddress ||
			"global"
		);
	},
});

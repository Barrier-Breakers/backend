import dotenv from "dotenv";
import Redis from "ioredis";
import { Request, Response, NextFunction } from "express";

dotenv.config();

// Configuração do cliente Redis
export const redis = new Redis({
	host: process.env.REDIS_HOST || "localhost",
	port: Number(process.env.REDIS_PORT) || 6379,
	password: process.env.REDIS_PASSWORD || undefined,
	retryStrategy: (times: number) => Math.min(times * 50, 2000),
	maxRetriesPerRequest: 3,
});

redis.on("connect", () => {
	console.log("✅ Conectado ao Redis");
});

redis.on("error", (err: Error) => {
	console.error("❌ Erro no Redis:", err);
});

export interface RateLimitOptions {
	keyPrefix?: string;
	windowSec?: number;
	max?: number;
	keyGenerator?: (req: Request) => string;
}

export async function redisRateLimit(
	req: Request,
	res: Response,
	next: NextFunction,
	options: RateLimitOptions,
): Promise<void> {
	try {
		let identifier: string;

		if (options.keyGenerator) {
			identifier = options.keyGenerator(req);
		} else {
			identifier =
				req.ip ||
				(req.headers["x-forwarded-for"] as string)
					?.split(",")[0]
					.trim() ||
				(req.headers["x-real-ip"] as string) ||
				(req.socket as any).remoteAddress ||
				"global";
		}

		const key = `${options.keyPrefix || "rate"}:${identifier}`;
		const ttl = options.windowSec || 60;
		const max = options.max || 10;

		const count = await redis.incr(key);

		if (count === 1) {
			await redis.expire(key, ttl);
		}

		if (count > max) {
			res.status(429).json({
				error: `Rate limit excedido: ${max} requisições em ${ttl}s.`,
				retryAfter: ttl,
			});
			return;
		}

		res.setHeader("X-RateLimit-Limit", max);
		res.setHeader("X-RateLimit-Remaining", Math.max(0, max - count));
		res.setHeader("X-RateLimit-Reset", ttl);

		next();
	} catch (error) {
		console.error("Erro no rate limiting:", error);
		next();
	}
}

export function createRateLimiter(options: RateLimitOptions) {
	return (req: Request, res: Response, next: NextFunction) => {
		redisRateLimit(req, res, next, options);
	};
}

export async function clearRateLimit(key: string): Promise<boolean> {
	try {
		await redis.del(key);
		return true;
	} catch (error) {
		console.error("Erro ao limpar rate limit:", error);
		return false;
	}
}

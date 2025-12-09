import dotenv from "dotenv";
import { Redis as UpstashRedis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";
import { Request, Response, NextFunction } from "express";

dotenv.config();

// Configuração do cliente Redis
const upstashUrl = process.env.UPSTASH_REDIS_REST_URL || process.env.UPSTASH_REDIS_URL;
const upstashToken = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.UPSTASH_REDIS_TOKEN;

// Upstash-only: Ensure credentials are present. If absent, `redis` will be null.
export const redis: any = upstashUrl && upstashToken ? new UpstashRedis({ url: upstashUrl, token: upstashToken }) : null;

if (redis) {
	// Attach a `.call()` helper to emulate ioredis.call for compatibility with existing code.
	// This uses the internal requester to execute arbitrary commands.
	if ((redis as any).client && !(redis as any).call) {
		(redis as any).call = async (cmd: string, ...args: any[]) => {
			const body = [cmd, ...args];
			const res = await (redis as any).client.request({ body, path: [] });
			// Upstash returns { result, error } normally. Recreate the ioredis-call semantics by returning result or throwing.
			if (res?.error) {
				throw new Error(res.error);
			}
			return res?.result ?? res;
		};
	}
} else {
	console.warn(
		"[Upstash Redis] UPSTASH_REDIS_REST_URL or token not configured; Redis client disabled."
	);
}

export interface RateLimitOptions {
	keyPrefix?: string;
	windowSec?: number;
	max?: number;
	keyGenerator?: (req: Request) => string;
}

const limiterCache = new Map<string, Ratelimit | null>();

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

		const keyPrefix = options.keyPrefix || "rate";
		const windowSec = options.windowSec || 60;
		const max = options.max || 10;

		// If redis is not configured (should not happen due to fallback), allow request through
		if (!redis) {
			console.error("Redis client não está configurado.");
			return next();
		}

		try {
			const cacheKey = `${keyPrefix}:${windowSec}:${max}`;
			if (!limiterCache.has(cacheKey)) {
				limiterCache.set(
					cacheKey,
					new Ratelimit({
						redis: redis as any,
							limiter: Ratelimit.tokenBucket(max, `${windowSec} s`, max),
						analytics: true,
						prefix: keyPrefix,
					}),
				);
			}

			const limiter = limiterCache.get(cacheKey) as Ratelimit;
			const result = await limiter.limit(identifier);
			const { success, limit, remaining, reset } = result as any;

			const resetSeconds =
				typeof reset === "number"
					? Math.max(0, Math.ceil((reset - Date.now()) / 1000))
					: windowSec;

			res.setHeader("X-RateLimit-Limit", limit);
			res.setHeader("X-RateLimit-Remaining", Math.max(0, remaining));
			res.setHeader("X-RateLimit-Reset", resetSeconds);

			if (!success) {
				res.status(429).json({
					error: `Rate limit excedido: ${limit} requisicoes em ${windowSec}s.`,
					retryAfter: resetSeconds,
				});
				return;
			}

			return next();
		} catch (err) {
			console.error("Erro no rate limiting Upstash:", err);
			return next();
		}
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
	if (!redis) {
		console.error('Upstash Redis nao esta configurado (verifique URL/token).');
		return false;
	}

	try {
		// Upstash Redis client matches the ioredis API for .del
		await (redis as any).del(key);
		return true;
	} catch (error) {
		console.error("Erro ao limpar rate limit:", error);
		return false;
	}
}

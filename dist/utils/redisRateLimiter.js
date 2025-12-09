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
exports.redis = void 0;
exports.redisRateLimit = redisRateLimit;
exports.createRateLimiter = createRateLimiter;
exports.clearRateLimit = clearRateLimit;
const dotenv_1 = __importDefault(require("dotenv"));
const redis_1 = require("@upstash/redis");
const ratelimit_1 = require("@upstash/ratelimit");
dotenv_1.default.config();
// Configuração do cliente Redis
const upstashUrl = process.env.UPSTASH_REDIS_REST_URL || process.env.UPSTASH_REDIS_URL;
const upstashToken = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.UPSTASH_REDIS_TOKEN;
// Upstash-only: Ensure credentials are present. If absent, `redis` will be null.
exports.redis = upstashUrl && upstashToken ? new redis_1.Redis({ url: upstashUrl, token: upstashToken }) : null;
if (exports.redis) {
    // Attach a `.call()` helper to emulate ioredis.call for compatibility with existing code.
    // This uses the internal requester to execute arbitrary commands.
    if (exports.redis.client && !exports.redis.call) {
        exports.redis.call = (cmd, ...args) => __awaiter(void 0, void 0, void 0, function* () {
            var _a;
            const body = [cmd, ...args];
            const res = yield exports.redis.client.request({ body, path: [] });
            // Upstash returns { result, error } normally. Recreate the ioredis-call semantics by returning result or throwing.
            if (res === null || res === void 0 ? void 0 : res.error) {
                throw new Error(res.error);
            }
            return (_a = res === null || res === void 0 ? void 0 : res.result) !== null && _a !== void 0 ? _a : res;
        });
    }
}
else {
    console.warn("[Upstash Redis] UPSTASH_REDIS_REST_URL or token not configured; Redis client disabled.");
}
const limiterCache = new Map();
function redisRateLimit(req, res, next, options) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        try {
            let identifier;
            if (options.keyGenerator) {
                identifier = options.keyGenerator(req);
            }
            else {
                identifier =
                    req.ip ||
                        ((_a = req.headers["x-forwarded-for"]) === null || _a === void 0 ? void 0 : _a.split(",")[0].trim()) ||
                        req.headers["x-real-ip"] ||
                        req.socket.remoteAddress ||
                        "global";
            }
            const keyPrefix = options.keyPrefix || "rate";
            const windowSec = options.windowSec || 60;
            const max = options.max || 10;
            // If redis is not configured (should not happen due to fallback), allow request through
            if (!exports.redis) {
                console.error("Redis client não está configurado.");
                return next();
            }
            try {
                const cacheKey = `${keyPrefix}:${windowSec}:${max}`;
                if (!limiterCache.has(cacheKey)) {
                    limiterCache.set(cacheKey, new ratelimit_1.Ratelimit({
                        redis: exports.redis,
                        limiter: ratelimit_1.Ratelimit.tokenBucket(max, `${windowSec} s`, max),
                        analytics: true,
                        prefix: keyPrefix,
                    }));
                }
                const limiter = limiterCache.get(cacheKey);
                const result = yield limiter.limit(identifier);
                const { success, limit, remaining, reset } = result;
                const resetSeconds = typeof reset === "number"
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
            }
            catch (err) {
                console.error("Erro no rate limiting Upstash:", err);
                return next();
            }
        }
        catch (error) {
            console.error("Erro no rate limiting:", error);
            next();
        }
    });
}
function createRateLimiter(options) {
    return (req, res, next) => {
        redisRateLimit(req, res, next, options);
    };
}
function clearRateLimit(key) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!exports.redis) {
            console.error('Upstash Redis nao esta configurado (verifique URL/token).');
            return false;
        }
        try {
            // Upstash Redis client matches the ioredis API for .del
            yield exports.redis.del(key);
            return true;
        }
        catch (error) {
            console.error("Erro ao limpar rate limit:", error);
            return false;
        }
    });
}

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
const ioredis_1 = __importDefault(require("ioredis"));
dotenv_1.default.config();
// Configuração do cliente Redis
exports.redis = new ioredis_1.default({
    host: process.env.REDIS_HOST || "localhost",
    port: Number(process.env.REDIS_PORT) || 6379,
    password: process.env.REDIS_PASSWORD || undefined,
    retryStrategy: (times) => Math.min(times * 50, 2000),
    maxRetriesPerRequest: 3,
});
exports.redis.on("connect", () => {
    console.log("✅ Conectado ao Redis");
});
exports.redis.on("error", (err) => {
    console.error("❌ Erro no Redis:", err);
});
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
            const key = `${options.keyPrefix || "rate"}:${identifier}`;
            const ttl = options.windowSec || 60;
            const max = options.max || 10;
            const count = yield exports.redis.incr(key);
            if (count === 1) {
                yield exports.redis.expire(key, ttl);
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
        try {
            yield exports.redis.del(key);
            return true;
        }
        catch (error) {
            console.error("Erro ao limpar rate limit:", error);
            return false;
        }
    });
}

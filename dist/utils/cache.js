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
exports.DEFAULT_TTL_SEC = void 0;
exports.cached = cached;
exports.cacheDel = cacheDel;
exports.cacheClearPattern = cacheClearPattern;
const redis_1 = require("../lib/redis");
// Default TTL: 5 days (dados de proposições são estáticos)
const DEFAULT_TTL_SEC = 60 * 60 * 24 * 5;
exports.DEFAULT_TTL_SEC = DEFAULT_TTL_SEC;
/**
 * Generic cache-aside helper.
 * Tries to get from Redis first; if miss, calls fetcher and caches the result.
 */
function cached(key, ttlSeconds, fetcher) {
    return __awaiter(this, void 0, void 0, function* () {
        const fromCache = yield redis_1.redis.get(key);
        if (fromCache) {
            const fromCacheStr = fromCache;
            return JSON.parse(fromCacheStr);
        }
        const result = yield fetcher();
        // Cache in background (don't block response)
        redis_1.redis.set(key, JSON.stringify(result), "EX", ttlSeconds).catch((err) => {
            console.error("[Cache] Failed to set cache:", err.message);
        });
        return result;
    });
}
/**
 * Delete a specific cache key
 */
function cacheDel(key) {
    return __awaiter(this, void 0, void 0, function* () {
        yield redis_1.redis.del(key);
    });
}
/**
 * Clear all keys matching a pattern (use with caution)
 */
function cacheClearPattern(pattern) {
    return __awaiter(this, void 0, void 0, function* () {
        const keys = yield redis_1.redis.keys(pattern);
        if (keys.length > 0) {
            yield redis_1.redis.del(...keys);
        }
    });
}

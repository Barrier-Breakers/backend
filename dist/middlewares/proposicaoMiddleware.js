"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proposicaoRateLimiter = exports.searchRateLimiter = void 0;
const redisRateLimiter_1 = require("../utils/redisRateLimiter");
/**
 * Rate limiter for search operations
 * 60 requests per 60 seconds per IP
 */
exports.searchRateLimiter = (0, redisRateLimiter_1.createRateLimiter)({
    keyPrefix: "proposicoes:search",
    windowSec: 60,
    max: 60,
    keyGenerator: (req) => {
        var _a;
        return (req.ip ||
            ((_a = req.headers["x-forwarded-for"]) === null || _a === void 0 ? void 0 : _a.split(",")[0].trim()) ||
            req.headers["x-real-ip"] ||
            req.socket.remoteAddress ||
            "global");
    },
});
/**
 * Rate limiter for general proposições operations
 * 30 requests per 60 seconds per IP
 */
exports.proposicaoRateLimiter = (0, redisRateLimiter_1.createRateLimiter)({
    keyPrefix: "proposicoes:general",
    windowSec: 60,
    max: 60,
    keyGenerator: (req) => {
        var _a;
        return (req.ip ||
            ((_a = req.headers["x-forwarded-for"]) === null || _a === void 0 ? void 0 : _a.split(",")[0].trim()) ||
            req.headers["x-real-ip"] ||
            req.socket.remoteAddress ||
            "global");
    },
});

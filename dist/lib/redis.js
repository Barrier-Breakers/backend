"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redis = void 0;
// Re-export the existing Redis client from redisRateLimiter
var redisRateLimiter_1 = require("../utils/redisRateLimiter");
Object.defineProperty(exports, "redis", { enumerable: true, get: function () { return redisRateLimiter_1.redis; } });

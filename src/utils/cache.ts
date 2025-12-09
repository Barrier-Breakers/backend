import { redis } from "../lib/redis";

// Default TTL: 5 days (dados de proposições são estáticos)
const DEFAULT_TTL_SEC = 60 * 60 * 24 * 5;

/**
 * Generic cache-aside helper.
 * Tries to get from Redis first; if miss, calls fetcher and caches the result.
 */
export async function cached<T>(
  key: string,
  ttlSeconds: number,
  fetcher: () => Promise<T>
): Promise<T> {
  const fromCache = await redis.get(key);
  if (fromCache) {
    const fromCacheStr = fromCache as unknown as string;
    return JSON.parse(fromCacheStr) as T;
  }

  const result = await fetcher();

  // Cache in background (don't block response)
  redis.set(key, JSON.stringify(result), "EX", ttlSeconds).catch((err: any) => {
    console.error("[Cache] Failed to set cache:", err.message);
  });

  return result;
}

/**
 * Delete a specific cache key
 */
export async function cacheDel(key: string): Promise<void> {
  await redis.del(key);
}

/**
 * Clear all keys matching a pattern (use with caution)
 */
export async function cacheClearPattern(pattern: string): Promise<void> {
  const keys = await redis.keys(pattern);
  if (keys.length > 0) {
    await redis.del(...keys);
  }
}

export { DEFAULT_TTL_SEC };

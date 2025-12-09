import dotenv from "dotenv";
dotenv.config();

import { redis } from "../src/utils/redisRateLimiter";
import * as redisSearch from "../src/services/redisSearchService";

// Simple, dedicated script that only removes Redis keys created by the
// postgres -> redis migration (prefix "proposicao:"). Safe by design —
// it won't touch rate limiter keys or other unrelated data.

const PREFIX = "proposicao:";

async function deleteKeysByPrefix(prefix: string) {
  console.log(`Deleting keys with prefix: ${prefix}`);
  let cursor = "0";
  let totalDeleted = 0;
  do {
    const res = await (redis as any).call("SCAN", cursor, "MATCH", `${prefix}*`, "COUNT", 1000);
    const nextCursor = res?.[0] ?? "0";
    const keys = res?.[1] ?? [];
    if (Array.isArray(keys) && keys.length > 0) {
      await redis.del(...keys);
      totalDeleted += keys.length;
    }
    cursor = String(nextCursor);
  } while (cursor !== "0");

  console.log(`Done. Total keys deleted: ${totalDeleted}`);
}

async function main() {
  try {
    console.log("Connecting to Redis...");
    await redis.ping();
  } catch (err) {
    console.error("Could not connect to Redis:", err);
    process.exit(1);
  }

  console.log("Dropping RediSearch index idx:proposicoes (if it exists)...");
  try {
    await redisSearch.dropIndex();
  } catch (err) {
    console.error("Failed to drop index:", err);
  }

  await deleteKeysByPrefix(PREFIX);

  if ((redis as any).quit) await (redis as any).quit();
  console.log("Finished clearing proposicoes data from Redis.");
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});

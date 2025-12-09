import dotenv from "dotenv";
dotenv.config();

import { redis } from "../src/utils/redisRateLimiter";
import * as redisSearch from "../src/services/redisSearchService";

// Example: npx ts-node scripts/clear-redis.ts --drop-index --delete-docs --force

const args = process.argv.slice(2);
const shouldDropIndex = args.includes("--drop-index");
const shouldDeleteDocs = args.includes("--delete-docs");
const shouldClearCache = args.includes("--clear-cache");
const shouldFlushAll = args.includes("--flush-all");
const force = args.includes("--force");
const allowRate = args.includes("--allow-rate");
const prefixArgIndex = args.indexOf("--prefix");
const prefix = prefixArgIndex !== -1 ? args[prefixArgIndex + 1] : "proposicao:";

const normalizedPrefix = prefix.endsWith(":") ? prefix : `${prefix}:`;

async function deleteKeysByPattern(pattern: string) {
  console.log(`Deleting keys matching pattern: ${pattern}`);
  let cursor = "0";
  let totalDeleted = 0;
  do {
    // SCAN returns [nextCursor, keys]
    const res = await (redis as any).call("SCAN", cursor, "MATCH", pattern, "COUNT", 1000);
    const nextCursor = res?.[0] ?? "0";
    const keys = res?.[1] ?? [];

    if (Array.isArray(keys) && keys.length > 0) {
      // Upstash supports multiple-keys DEL
      await redis.del(...keys);
      totalDeleted += keys.length;
      console.log(`  Deleted ${totalDeleted} keys so far...`);
    }
    cursor = String(nextCursor);
  } while (cursor !== "0");

  console.log(`Done. Total keys deleted: ${totalDeleted}`);
}

function isDangerousPrefix(p: string) {
  const lower = p.toLowerCase();
  return (
    lower === "*" ||
    lower === "" ||
    lower.startsWith("rate") ||
    lower.includes("rate:") ||
    lower.includes("rate_")
  );
}

async function confirmDangerousAction() {
  if (!force) {
    console.error("Aborting: dangerous action requires --force to confirm");
    process.exit(1);
  }
}

async function main() {
  try {
    console.log("Connecting to Redis...");
    await redis.ping();
  } catch (err) {
    console.error("Could not connect to Redis:", err);
    process.exit(1);
  }

  // Safety checks: avoid accidentally deleting rate-limiter keys
  if (isDangerousPrefix(normalizedPrefix) && !allowRate) {
    console.error(
      `Refusing to operate on prefix ${normalizedPrefix} because it may overlap with rate-limiter keys. Add --allow-rate to override.`
    );
    process.exit(1);
  }

  console.log("Planned actions:");
  if (shouldDropIndex) console.log(" - Drop RediSearch index idx:proposicoes");
  if (shouldDeleteDocs) console.log(` - Delete docs: ${normalizedPrefix}*`);
  if (shouldClearCache) console.log(` - Clear cache keys: ${normalizedPrefix}*`);
  if (shouldFlushAll) console.log(" - FLUSHALL (destructive)");

  if ((shouldDropIndex || shouldDeleteDocs || shouldClearCache || shouldFlushAll) && !force) {
    console.error("Aborting: no --force flag (use --force to confirm the planned actions)");
    process.exit(1);
  }

  if (shouldFlushAll) {
    console.log("Flushing all keys from Redis (FLUSHALL)");
    await redis.flushall();
    console.log("OK");
  }

  if (shouldDropIndex) {
    console.log("Dropping RediSearch index 'idx:proposicoes' (will also delete docs if index was created with DD)");
    await redisSearch.dropIndex();
  }

  if (shouldDeleteDocs) {
    await deleteKeysByPattern(`${normalizedPrefix}*`);
  }

  if (shouldClearCache) {
    await deleteKeysByPattern(`${normalizedPrefix}*`);
    console.log("Cache cleared for prefix:", normalizedPrefix);
  }

  if ((redis as any).quit) await (redis as any).quit();
  console.log("Done.");
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});

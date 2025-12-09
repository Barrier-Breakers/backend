/**
 * Script to populate Redis with all proposições from Postgres
 * Run with: npx ts-node scripts/populate-redis.ts
 */

import dotenv from "dotenv";
dotenv.config();

import prisma from "../src/db/prisma";
import * as redisSearch from "../src/services/redisSearchService";
import { redis } from "../src/utils/redisRateLimiter";

const BATCH_SIZE = 200; // Smaller batches to avoid memory spikes
const DELAY_BETWEEN_BATCHES_MS = 100; // Small delay to let Redis breathe

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function main() {
  console.log("=== Populate Redis with Proposições ===\n");

  // 1. Check Redis connection
  console.log("[1/4] Checking Redis connection...");
  try {
    await redis.ping();
    console.log("✅ Redis connected\n");
  } catch (err) {
    console.error("❌ Redis connection failed:", err);
    process.exit(1);
  }

  // 2. Create/recreate the index
  console.log("[2/4] Creating RediSearch index...");
  const recreate = process.argv.includes("--recreate");
  if (recreate) {
    console.log("   (--recreate flag: dropping existing index)");
    await redisSearch.dropIndex();
  }
  await redisSearch.createIndex();
  console.log("✅ Index ready\n");

  // 3. Count proposições in Postgres
  console.log("[3/4] Counting proposições in Postgres...");
  const totalCount = await prisma.proposicao.count();
  console.log(`   Found ${totalCount} proposições\n`);

  // Check if already populated
  const redisCount = await redisSearch.getProposicoesCount();
  if (redisCount >= totalCount && !recreate) {
    console.log(`✅ Redis already has ${redisCount} proposições. Skipping.`);
    console.log("   (Use --recreate to force repopulation)");
    await prisma.$disconnect();
    process.exit(0);
  }

  // 4. Populate Redis in batches
  console.log("[4/4] Populating Redis...");
  let processed = 0;
  const startTime = Date.now();

  while (processed < totalCount) {
    const batch = await prisma.proposicao.findMany({
      skip: processed,
      take: BATCH_SIZE,
      orderBy: { id: "asc" },
    });

    // Use pipeline for better performance
    // Only store fields needed for search + display (reduces memory ~70%)
    const pipeline = redis.pipeline();
    for (const proposicao of batch) {
      const key = `proposicao:${proposicao.id}`;
      const fields: (string | number)[] = [];

      const addField = (name: string, value: any) => {
        if (value !== null && value !== undefined) {
          fields.push(name, String(value));
        }
      };

      // Essential fields for display
      addField("id", proposicao.id);
      addField("siglaTipo", proposicao.siglaTipo);
      addField("numero", proposicao.numero);
      addField("ano", proposicao.ano);
      addField("ementa", proposicao.ementa);
      
      // Fields used for full-text search
      addField("keywords", proposicao.keywords);
      addField("despacho", proposicao.despacho);
      
      // Fields used for filtering
      addField("descricaoSituacao", proposicao.descricaoSituacao);
      addField("dataApresentacao", proposicao.dataApresentacao?.toISOString?.() || proposicao.dataApresentacao);

      if (fields.length > 0) {
        const kv: Record<string, any> = {};
        for (let i = 0; i < fields.length; i += 2) {
          kv[String(fields[i])] = String(fields[i + 1]);
        }
        pipeline.hset(key, kv);
      }
    }

    await pipeline.exec();

    processed += batch.length;
    const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
    const percent = ((processed / totalCount) * 100).toFixed(1);
    const rate = (processed / parseFloat(elapsed)).toFixed(0);
    
    console.log(`   ${processed}/${totalCount} (${percent}%) - ${elapsed}s - ${rate} docs/s`);

    // Small delay to let Redis catch up and avoid memory spikes
    if (processed < totalCount) {
      await sleep(DELAY_BETWEEN_BATCHES_MS);
    }
  }

  const totalTime = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log(`\n✅ Done! Populated ${processed} proposições in ${totalTime}s`);

  // Verify
  const finalCount = await redisSearch.getProposicoesCount();
  console.log(`   Redis now has ${finalCount} indexed documents`);

  await prisma.$disconnect();
  process.exit(0);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});

📘 Documentação resumida — Cache Redis com Express + Postgres
🎯 Objetivo

Reduzir consultas de 4s → milissegundos usando Redis com o padrão cache-aside.

1. Dependências
   Redis Upstash:
   npm install @upstash/redis

Redis Upstash (recommended):
npm install @upstash/redis

2. Criar cliente Redis
   /src/lib/redis.ts

Upstash (preferred):
import { Redis } from "@upstash/redis";

export const redis = new Redis({
   url: process.env.UPSTASH_REDIS_REST_URL!,
   token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

3. Criar helper genérico de cache (cache-aside)
   /src/utils/cache.ts
   import { redis } from "../lib/redis";

export async function cached<T>(
key: string,
ttlSeconds: number,
fetcher: () => Promise<T>
): Promise<T> {

const fromCache = await redis.get(key);
if (fromCache) return fromCache as T;

const result = await fetcher();

// Evita bloquear resposta
redis.set(key, result, "EX", ttlSeconds).catch(() => {});

return result;
}

4. Usar o cache dentro dos services
   Exemplo: Service de busca por ID
   /src/services/monsterService.ts
   import { cached } from "../utils/cache";
   import { db } from "../lib/db"; // seu client postgres

export async function getMonsterById(id: number) {
return cached(
`monster:${id}`,
60 _ 60 _ 24, // 24h de cache
async () => {
const result = await db.query(
"SELECT \* FROM monsters WHERE id = $1",
[id]
);
return result.rows[0];
}
);
}

5. Usar o service no controller
   /src/controllers/monsterController.ts
   import { getMonsterById } from "../services/monsterService";

export async function getMonster(req, res) {
const id = Number(req.params.id);
const monster = await getMonsterById(id);
res.json(monster);
}

6. Rotas Express
   /src/routes/monsters.ts
   import express from "express";
   import { getMonster } from "../controllers/monsterController";

const router = express.Router();

router.get("/:id", getMonster);

export default router;

7. Listas grandes (ex: todos os 94 mil registros)
   /src/services/monsterService.ts
   export async function getAllMonsters() {
   return cached(
   "monsters:all",
   60 _ 60, // 1h de cache
   async () => {
   const result = await db.query("SELECT _ FROM monsters");
   return result.rows;
   }
   );
   }

8. Considerações importantes
   ✔ Redis é o fonte primário rápido

A maior parte das requisições será resolvida sem tocar no Postgres.

✔ Banco só é chamado quando:

Cache expirou (TTL),

Redis reiniciou,

A chave nunca foi salva.

✔ TTL para dados fixos:

7 dias

30 dias

ou até infinito (sem EX)

✔ Se quiser performance máxima:

Cache por ID (monster:123)

Cache a lista total (monsters:all)

Cache buscas específicas (monsters:search:dragao)

9. Opcional — Prewarm do cache

Se quiser NUNCA pegar cache frio:

Crie um script cron:

await getAllMonsters();

Ele reconstruirá automaticamente o cache se estiver vazio.

10. Arquitetura final
    Express → Controller → Service  
     ↳ Redis (rápido)
    ↳ Postgres (fallback)

99% das requisições caem no Redis.

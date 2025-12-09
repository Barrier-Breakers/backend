# Barrier Breakers - Backend

Este repositório contém o backend do projeto Barrier Breakers, uma API REST em Node.js (TypeScript) que oferece:
- Busca avançada e exposição de proposições (Câmara dos Deputados).
- Simplificação de textos com LLM (Gemini) e geração de áudio com Google TTS (Chirp).
- Autenticação via Supabase.
- Recursos de denúncia georreferenciada (PostGIS).
- Rate limiting com Redis e documentação via Swagger.

---

## Sumário
- [Visão Geral](#visão-geral)
- [Arquitetura & Tecnologias](#arquitetura--tecnologias)
- [Instalação & Desenvolvimento](#instalação--desenvolvimento)
- [Variáveis de Ambiente](#variáveis-de-ambiente)
- [Endpoints Principais](#endpoints-principais)
- [Fluxo LLM + TTS (simplify)](#fluxo-llm--tts-simplify)
- [Rate limiting, Queue e Tasks de Áudio](#rate-limiting-queue-e-tasks-de-áudio)
- [Prisma & Banco de Dados](#prisma--banco-de-dados)
- [Swagger & Health Check](#swagger--health-check)
- [Recomendações e Próximos Passos](#recomendações-e-próximos-passos)
- [Scripts úteis & docker](#scripts-úteis--docker)
- [Troubleshooting](#troubleshooting)

---

## Visão Geral
A API fornece:
- Endpoints para leitura (GET) e escrita (POST/PUT/DELETE) de proposições, denúncias, posts, comentários e usuários.
- Um endpoint chave: `GET /api/proposicoes/:id/simplify` que gera um resumo simplificado via LLM (Gemini) e converte em áudio (Chirp / Google TTS).
- Autenticação via Supabase (Bearer token).
- Persistência via PostgreSQL+Prisma (PostGIS para campos geográficos).

---

## Arquitetura & Tecnologias
- Node.js + TypeScript + Express
- Supabase (auth)
- PostgreSQL com Prisma (Prisma Client / PrismaPg pooling)
- PostGIS (geografia, ST_MakePoint/ST_DWithin) — usado nas denúncias
- Google Generative AI (Gemini) via `@google/genai` para sumarização
- Google Cloud Text-to-Speech via `@google-cloud/text-to-speech` para áudio
- Redis (Upstash Redis) para rate limiting
- Docker / docker-compose
- Swagger (swagger-jsdoc + swagger-ui-express)

Arquivos-chave:
- `src/index.ts` — boot do app, configura Supabase e Prisma, rotas, middlewares.
- `src/routes/` — rotas: auth, proposicoes, db, denuncias.
- `src/controllers/` — lógica por recurso.
- `src/services/` — geminiService, ttsService, proposicaoService, audioTaskService, dbService, authService.
- `prisma/schema.prisma` — modelo do DB.

---

## Instalação & Desenvolvimento

Pré-requisitos:
- Node 18+ / pnpm (ou npm)
- Docker (opcional)
- Banco PostgreSQL com PostGIS
- Redis
- Conta/Chave Google Cloud (Text-to-Speech) e chave de API/credentials Gemini

Rodando local:
1. Instalar dependências:
```bash
pnpm install
```

2. Gerar client Prisma:
```bash
pnpm run prisma:generate
```

3. Rodar em modo dev:
```bash
pnpm run dev
```

4. Build & Start:
```bash
pnpm run build
pnpm start
```

Docker:
```bash
docker-compose up --build
```

Seed de proposições (json grande):
```bash
pnpm run db:seed:proposicoes
```

---

## Variáveis de Ambiente (principais)
Supabase, DB, Redis e Google TTS:
- `SUPABASE_URL` — URL do Supabase
- `SUPABASE_ANON_KEY` — anon key do Supabase
- `DATABASE_URL` — connection string postgresql
- `DIRECT_URL` — usado por scripts seed
- `REDIS_HOST`, `REDIS_PORT`, `REDIS_PASSWORD`
- `GOOGLE_APPLICATION_CREDENTIALS` — pode ser PATH para chave JSON ou o JSON/base64 embutido em string
- `GEMINI_API_KEY` / `GOOGLE_GENERATIVE_AI_API_KEY` — chaves (quando aplicáveis)
- `GEMINI_CHIRP_VOICE`, `GEMINI_CHIRP_LANGUAGE`, `GEMINI_CHIRP_AUDIO_ENCODING`, `GEMINI_CHIRP_MODEL`
- `GEMINI_SUMMARIZE_TIMEOUT_MS`, `GEMINI_SUMMARY_MAX_CHARS`, `GEMINI_TTS_TIMEOUT_MS`
- `AUDIO_TASK_TTL_MS` — TTL em ms para expirar tasks de áudio (default: 15min)

IMPORTANTE:
- `GOOGLE_APPLICATION_CREDENTIALS` aceita:
  - caminho para arquivo de chave;
  - o conteúdo JSON em formato plain;
  - conteúdo base64 do JSON — o serviço detecta, decodifica e usa apropriadamente;
- `GEMINI_SUMMARIZE_TIMEOUT_MS` controla timeout da chamada para a LLM;
- `GEMINI_TTS_TIMEOUT_MS` controla timeout de TTS.

---

## Endpoints Principais (resumo)
- Auth:
  - `POST /api/auth/signup` — Criar usuário via Supabase
  - `POST /api/auth/signin` — Login
  - `POST /api/auth/signin/google` — OAuth Google (retorna URL)
  - `GET /api/auth/me` — Dados do usuário (protected)
  - `POST /api/auth/logout` — Logout (protected)
  - `POST /api/auth/onboarding` — Completar onboarding (protected)

- Proposições:
  - `GET /api/proposicoes/search?q=<term>&limit=&offset=` — Busca avançada (60req/min)
  - `GET /api/proposicoes/stats/geral` — Estatísticas agregadas
  - `GET /api/proposicoes/:id` — Buscar por ID
  - `GET /api/proposicoes/:id/simplify` — Simplifica proposição: LLM + TTS (detalhes abaixo)
  - `GET /api/proposicoes/:id/simplify/audio/:taskId` — Status/resultado do TTS (polling)
  - `GET /api/proposicoes/` — listar paginado
  - `GET /api/proposicoes/tipo/:tipo` — filtra por tipo
  - `GET /api/proposicoes/situacao/:situacao` — filtra por situação

- Denúncias:
  - `GET /api/denuncias` — Lista (por raio quando lat/lng presente)
  - `POST /api/denuncias` — Cria denuncia (auth)
  - `POST /api/denuncias/mock` — Cria mock denuncias ao redor de lat/lng (auth) — útil para desenvolvimento
  - `POST /api/denuncias/:id/comments` — Adiciona comentário (auth)

- DB (Admin-like):
  - `/api/users`, `/api/users/:id`, `/api/posts`, `/api/posts/:id`, etc. (CRUD)

---

## Fluxo LLM + TTS (Endpoint simplify)
O endpoint `GET /api/proposicoes/:id/simplify` realiza duas operações principais:
1. Sumarização via LLM (Gemini).
2. Conversão do resumo em áudio via Google TTS (Chirp).

Modo de operação:
- Request:
  - `GET /api/proposicoes/:id/simplify`
  - Query params:
    - `waitForAudio=true` | `false` (padrão false). Se `true`, o endpoint espera a TTS terminar e devolve `text` + `audioBase64` (200).
    - `audioCodec` — `MP3`, `OGG_OPUS`, `LINEAR16`, etc.

- Se `waitForAudio=true`:
  - Controller `proposicaoController.simplify`:
    - chama `proposicaoService.summarizeProposicao(id)` (soma os campos da proposição).
    - chama `ttsService.synthesizeChirpAudioBase64(text, opts)` e retorna:
      - Status 200:
      ```json
      { "text": "resumo...", "audioBase64": "base64..." }
      ```

- Se `waitForAudio` não fornecido ou `false` (recomendado para UX):
  - Controller:
    - Gera resumo => retorna imediatamente o texto ao cliente, criando um `taskId` de TTS:
      - Status 202:
      ```json
      { "text": "resumo...", "taskId": "uuid", "audioStatus": "pending" }
      ```
    - Em background (fire-and-forget) realiza:
      - `audioTaskService.setTaskProcessing(taskId)`
      - `ttsService.synthesizeChirpAudioBase64(text, { audioEncoding: codec })`
      - `audioTaskService.setTaskCompleted(taskId, audioBase64)` ou `setTaskFailed` em caso de erro
  - Cliente faz polling:
    - `GET /api/proposicoes/:id/simplify/audio/:taskId` retorna:
      ```json
      {
        "id": "uuid",
        "status": "pending|processing|completed|failed",
        "audioBase64": "..."   // presente se completed
      }
      ```
Observações:
- O resumo é gerado com um prompt em pt-BR que solicita texto simples e limpo, com truncamento para evitar tokens excessivos:
  - Configurações: `GEMINI_SUMMARY_MAX_CHARS`
  - O `GeminiService.sanitizeSummary` normaliza o texto (remove markdown, preâmbulos, etc).
- TTS:
  - O `ttsService` aceita `GOOGLE_APPLICATION_CREDENTIALS` em vários formatos.
  - Suporta `MP3`, `OGG_OPUS`, `LINEAR16`.
  - `GeminiService` tem tentativa de retry para TTS (configurável via `GEMINI_TTS_ATTEMPTS` e `GEMINI_TTS_TIMEOUT_MS`).

Exemplos (curl):

- Síncrono:
```bash
curl "http://localhost:4000/api/proposicoes/2481874/simplify?waitForAudio=true&audioCodec=MP3"
# Retorna 200 com text + audioBase64
```

- Assíncrono:
```bash
curl "http://localhost:4000/api/proposicoes/2481874/simplify"
# Retorna 202 { text, taskId, audioStatus }
curl "http://localhost:4000/api/proposicoes/2481874/simplify/audio/<taskId>"
# Retorna status e, quando pronto, audioBase64
```

---

## Tasks de Áudio, Persistência e Escalabilidade
- Implementado: `audioTaskService` (memória, Map) com TTL (default 15 minutos via `AUDIO_TASK_TTL_MS`).
- Warning: Em produção com múltiplas instâncias o armazenamento em memória perde tasks ao reiniciar: considere migrar para:
  - Redis para coordenação + persistência e TTL;
  - Uma fila dedicada (BullMQ, RabbitMQ, Google Cloud Tasks) e worker(s) para TTS;
  - Armazenar audio em storage (S3/Supabase Storage) ao invés de base64 em memória/DB.

---

## Rate limiting e Redis
- Rate limiter implementado com Redis (`redisRateLimiter.ts`).
- Taxas por rota (exemplos):
  - `proposicoes:search` — 60 req/min
  - `proposicoes:general` — 30 req/min
  - `auth:signup` — 5 req/min
  - `auth:signin/google` — 10 req/min
- Cabe ao deploy assegurar Redis disponível e dimensionado.

---

## Prisma & Banco de Dados
- Prisma Client gerado a partir de `prisma/schema.prisma`.
- Pooling via `@prisma/adapter-pg` e `pg.Pool` em `src/db/prisma.ts`.
- Modelos: `User`, `Session`, `Post`, `Comment`, `Proposicao`, `Denuncia`, etc.
- Denuncia usa `Unsupported("geography(Point,4326)")` em Prisma e queries raw para ST_MakePoint / ST_DWithin.
- Lembrete: executar `pnpm run prisma:generate` ao alterar `schema.prisma`.

---

## Swagger & Health Check
- Swagger UI montado em: `GET /docs` (docs dinamicamente geradas via `swagger-jsdoc`).
- Health: `GET /health` — checa conexão com DB e retorna status.

---

## Scripts úteis & docker
- `pnpm run dev` — rodar dev server
- `pnpm run build` — gerar Prisma e compilar TypeScript
- `pnpm run prisma:generate` — gerar Prisma client
- `pnpm run db:seed` / `db:seed:proposicoes` — popular proposições
- `pnpm run docker:build` / `docker-compose` — containerização
- Dockerfile multi-stage: dependências > build > runtime

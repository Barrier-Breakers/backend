# 📜 Proposições - API de Consulta

## Resumo

Modelo de dados para armazenar proposições legislativas da Câmara dos Deputados do Brasil. Os dados são importados do arquivo `proposicoes-2025-resumido.json` e as informações do objeto `ultimoStatus` são "flattened" (desaninhadas) para o nível raiz da tabela para facilitar consultas.

## Estrutura do Modelo

### Tabela `proposicoes`

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` | Int | ID único da proposição |
| `uri` | String | URI da API da Câmara |
| `siglaTipo` | String | Sigla do tipo (PL, PEC, etc) |
| `numero` | Int | Número da proposição |
| `ano` | Int | Ano de apresentação |
| `codTipo` | Int | Código do tipo |
| `descricaoTipo` | String | Descrição do tipo |
| `ementa` | String | Descrição resumida |
| `ementaDetalhada` | String? | Descrição detalhada |
| `keywords` | String? | Palavras-chave |
| `dataApresentacao` | DateTime? | Data de apresentação |
| `urlInteiroTeor` | String? | URL do texto integral |
| `statusData` | DateTime? | Data do último status |
| `descricaoSituacao` | String? | Situação atual |
| `idSituacao` | String? | ID da situação |
| `codOrgao` | String? | Código do órgão |
| `siglaOrgao` | String? | Sigla do órgão |
| `regime` | String? | Regime de tramitação |
| `descricaoTramitacao` | String? | Descrição da tramitação |
| `despacho` | String? | Último despacho |
| `statusApreciacao` | String? | Tipo de apreciação |

### Índices

- `ano` - Para filtrar por ano
- `siglaTipo` - Para filtrar por tipo de proposição
- `numero` - Para buscar número específico
- `statusData` - Para ordenar por data
- `descricaoSituacao` - Para filtrar por situação

## Endpoints da API

### GET /api/proposicoes
Listar proposições com paginação

**Query Parameters:**
- `skip` (number) - Paginação offset (padrão: 0)
- `take` (number) - Quantidade por página (padrão: 20)
- `ano` (number) - Filtrar por ano
- `siglaTipo` (string) - Filtrar por tipo (ex: PL, PEC)

**Exemplo:**
```bash
GET /api/proposicoes?ano=2025&siglaTipo=PL&skip=0&take=20
```

**Response:**
```json
{
  "data": [...],
  "pagination": {
    "total": 1500,
    "page": 1,
    "pages": 75,
    "take": 20
  }
}
```

### GET /api/proposicoes/:id
Buscar proposição específica

**Exemplo:**
```bash
GET /api/proposicoes/2481874
```

### GET /api/proposicoes/:id/simplify
Gerar versão simplificada em texto e áudio (Gemini + TTS).

**Exemplo:**
```bash
GET /api/proposicoes/2481874/simplify
```

**Response:**
```json
{
  "text": "Versão simplificada em português...",
  "audioBase64": "UklGRiQAAABXQVZFZm10IBAAAAAB... (base64 wav)"
}
```

Note: The `text` value is a short, TTS-friendly summary (title + a single paragraph), with expanded acronyms and no bullets or preamble.

Behavior:
- By default, the endpoint returns the `text` immediately and spawns an asynchronous TTS conversion; it returns HTTP 202 with a `taskId`.
- Add `?waitForAudio=true` to the request to block until the audio is generated and return `audioBase64` in the response (may take more time).
- Add `?audioCodec=ogg_opus` to request OGG Opus audio instead of MP3. The server will use `OGG_OPUS` encoding with the TTS service.

When the endpoint returns a `taskId`, use the following endpoint to check status and fetch audio:

### GET /api/proposicoes/:id/simplify/audio/:taskId

**Response:**
```json
{
  "id": "<taskId>",
  "status": "processing|completed|failed",
  "audioBase64": "... (base64) | null",
  "error": "error message | null"
}
```

Configuração: defina a variável de ambiente `GOOGLE_GENERATIVE_AI_API_KEY` para que o serviço chame o Gemini (text generation). Você também pode usar `GOOGLE_API_KEY` ou `GEMINI_API_KEY` como alias se preferir.

Para o serviço de Texto -> Fala (Chirp 3) usamos o Cloud Text-to-Speech da Google, portanto defina também `GOOGLE_APPLICATION_CREDENTIALS` (apontando para o arquivo JSON de service account) ou configure as credenciais de aplicação padrão no ambiente.

Opções adicionais:
- `GEMINI_TTS_TIMEOUT_MS`: timeout (ms) para a chamada de TTS; padrão 180000 (3 minutos).
- `GEMINI_TTS_ATTEMPTS`: número de tentativas para TTS; padrão 3.
- `GEMINI_SUMMARIZE_TIMEOUT_MS`: timeout (ms) para a geração de texto resumido; padrão 30000 (30 segundos).
 - `GEMINI_SUMMARY_MAX_CHARS`: limite máximo de caracteres para o resumo (título + parágrafo). Padrão: 300.
 - `GEMINI_CHIRP_MODEL`: (opcional) modelo a ser usado para as vozes Chirp quando necessário.

### GET /api/proposicoes/situacao/:situacao
Buscar proposições por situação

**Exemplo:**
```bash
GET /api/proposicoes/situacao/Transformado?skip=0&take=10
```

### GET /api/proposicoes/tipo/:tipo
Buscar proposições por tipo

**Exemplo:**
```bash
GET /api/proposicoes/tipo/PL?skip=0&take=20
```

### GET /api/proposicoes/stats/geral
Obter estatísticas gerais

**Response:**
```json
{
  "total": 1500,
  "porAno": [{...}],
  "porTipo": [{...}],
  "porSituacao": [{...}]
}
```

## Como Usar

### 1. Aplicar Schema ao Banco

```bash
pnpm run prisma:push
```

### 2. Popular Dados

```bash
pnpm run db:seed-proposicoes
```

Ou adicione ao `package.json`:
```json
"scripts": {
  "db:seed:proposicoes": "ts-node prisma/seed-proposicoes.ts"
}
```

### 3. Usar no Código

```typescript
import prisma from "./src/db/prisma";

// Buscar todas as proposições de 2025
const proposicoes = await prisma.proposicao.findMany({
  where: {
    ano: 2025,
    siglaTipo: "PL",
  },
  orderBy: { dataApresentacao: "desc" },
  take: 50,
});

// Buscar por situação
const transformadas = await prisma.proposicao.findMany({
  where: {
    descricaoSituacao: {
      contains: "Transformado",
      mode: "insensitive",
    },
  },
});

// Contar por órgão
const porOrgao = await prisma.proposicao.groupBy({
  by: ["siglaOrgao"],
  _count: true,
});
```

## Estrutura do JSON Processado

Cada objeto no JSON `proposicoes-2025-resumido.json` tem a estrutura:

```json
{
  "id": 2481874,
  "siglaTipo": "PL",
  "numero": 1,
  "ano": 2025,
  "ementa": "...",
  "ultimoStatus": {
    "data": "2025-07-22T00:00:00",
    "descricaoSituacao": "Transformado em Norma Jurídica",
    "siglaOrgao": "MESA",
    ...
  }
}
```

O script de seed "flattena" as chaves de `ultimoStatus` para o nível raiz com prefixo `status` ou nomes descritivos.

## Troubleshooting

**Erro ao executar seed:**
```bash
# Regenerar cliente Prisma
pnpm run prisma:generate

# Tentar seed novamente
pnpm run db:seed:proposicoes
```

**Muitos dados?**
O script processa em lotes e exibe progresso a cada 100 registros.

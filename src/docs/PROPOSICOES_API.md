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

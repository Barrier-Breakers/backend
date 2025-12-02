import { redis } from "../utils/redisRateLimiter";

const INDEX_NAME = "idx:proposicoes";
const PREFIX = "proposicao:";

/**
 * Check if the RediSearch index exists
 */
export async function indexExists(): Promise<boolean> {
  try {
    await redis.call("FT.INFO", INDEX_NAME);
    return true;
  } catch (err: any) {
    if (err.message?.includes("Unknown index name")) {
      return false;
    }
    throw err;
  }
}

/**
 * Create the RediSearch index for proposições
 * Minimal schema for search + display (saves memory)
 */
export async function createIndex(): Promise<void> {
  const exists = await indexExists();
  if (exists) {
    console.log("[RediSearch] Index already exists");
    return;
  }

  console.log("[RediSearch] Creating index...");

  await redis.call(
    "FT.CREATE",
    INDEX_NAME,
    "ON", "HASH",
    "PREFIX", "1", PREFIX,
    "SCHEMA",
    // Searchable text fields (full-text search)
    "keywords", "TEXT", "WEIGHT", "2.0",
    "ementa", "TEXT", "WEIGHT", "1.5",
    "despacho", "TEXT", "WEIGHT", "1.0",
    // Filterable/display fields
    "siglaTipo", "TAG",
    "ano", "NUMERIC", "SORTABLE",
    "numero", "NUMERIC",
    "descricaoSituacao", "TEXT",
    "dataApresentacao", "TEXT", "SORTABLE"
  );

  console.log("[RediSearch] Index created successfully");
}

/**
 * Drop the index (for rebuilding)
 */
export async function dropIndex(): Promise<void> {
  try {
    await redis.call("FT.DROPINDEX", INDEX_NAME, "DD"); // DD = delete documents too
    console.log("[RediSearch] Index dropped");
  } catch (err: any) {
    // Ignore "Unknown Index name" error (case insensitive check)
    if (!err.message?.toLowerCase().includes("unknown index")) {
      throw err;
    }
    console.log("[RediSearch] Index did not exist, nothing to drop");
  }
}

/**
 * Add a proposição to Redis
 * Only stores essential fields for search and display (reduces memory ~70%)
 */
export async function addProposicao(proposicao: any): Promise<void> {
  const key = `${PREFIX}${proposicao.id}`;
  
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

  await redis.hset(key, ...fields);
}

/**
 * Get proposição by ID from Redis
 */
export async function getProposicaoById(id: number): Promise<any | null> {
  const key = `${PREFIX}${id}`;
  const data = await redis.hgetall(key);
  
  if (!data || Object.keys(data).length === 0) {
    return null;
  }

  // Convert numeric fields back
  return {
    ...data,
    id: parseInt(data.id),
    numero: data.numero ? parseInt(data.numero) : null,
    ano: data.ano ? parseInt(data.ano) : null,
    codTipo: data.codTipo ? parseInt(data.codTipo) : null,
    codOrgao: data.codOrgao ? parseInt(data.codOrgao) : null,
    idTipoTramitacao: data.idTipoTramitacao ? parseInt(data.idTipoTramitacao) : null,
  };
}

export interface RedisSearchParams {
  query?: string;
  filters?: {
    siglaTipo?: string;
    ano?: number;
    codTipo?: number;
    descricaoTipo?: string;
    codOrgao?: number;
    siglaOrgao?: string;
    regime?: string;
    descricaoTramitacao?: string;
    idTipoTramitacao?: number;
    descricaoSituacao?: string;
    apreciacao?: string;
  };
  limit: number;
  offset: number;
}

/**
 * Search proposições using RediSearch
 */
export async function searchProposicoes(params: RedisSearchParams): Promise<{
  data: any[];
  total: number;
}> {
  const { query, filters = {}, limit, offset } = params;

  // Build the search query
  let searchQuery = "";

  // Text search across keywords, ementa, despacho
  if (query && query.trim().length > 0) {
    const words = query.trim().split(/\s+/).filter(w => w.length > 0);
    // Use fuzzy matching with % prefix for typo tolerance
    const fuzzyWords = words.map(w => `%%${w}%%`).join(" ");
    searchQuery = `(${fuzzyWords})`;
  }

  // Add filters
  const filterParts: string[] = [];

  if (filters.siglaTipo) {
    filterParts.push(`@siglaTipo:{${filters.siglaTipo}}`);
  }
  if (filters.ano) {
    filterParts.push(`@ano:[${filters.ano} ${filters.ano}]`);
  }
  if (filters.codTipo) {
    filterParts.push(`@codTipo:[${filters.codTipo} ${filters.codTipo}]`);
  }
  if (filters.descricaoTipo) {
    filterParts.push(`@descricaoTipo:(${filters.descricaoTipo})`);
  }
  if (filters.codOrgao) {
    filterParts.push(`@codOrgao:[${filters.codOrgao} ${filters.codOrgao}]`);
  }
  if (filters.siglaOrgao) {
    filterParts.push(`@siglaOrgao:{${filters.siglaOrgao}}`);
  }
  if (filters.regime) {
    filterParts.push(`@regime:(${filters.regime})`);
  }
  if (filters.descricaoTramitacao) {
    filterParts.push(`@descricaoTramitacao:(${filters.descricaoTramitacao})`);
  }
  if (filters.idTipoTramitacao) {
    filterParts.push(`@idTipoTramitacao:[${filters.idTipoTramitacao} ${filters.idTipoTramitacao}]`);
  }
  if (filters.descricaoSituacao) {
    filterParts.push(`@descricaoSituacao:(${filters.descricaoSituacao})`);
  }
  if (filters.apreciacao) {
    filterParts.push(`@statusApreciacao:(${filters.apreciacao})`);
  }

  // Combine query and filters
  let finalQuery = "*"; // Default: match all
  if (searchQuery && filterParts.length > 0) {
    finalQuery = `${searchQuery} ${filterParts.join(" ")}`;
  } else if (searchQuery) {
    finalQuery = searchQuery;
  } else if (filterParts.length > 0) {
    finalQuery = filterParts.join(" ");
  }

  console.log(`[RediSearch] Query: ${finalQuery}`);

  // Execute search
  const result = await redis.call(
    "FT.SEARCH",
    INDEX_NAME,
    finalQuery,
    "LIMIT", offset, limit,
    "SORTBY", "dataApresentacao", "DESC"
  ) as any[];

  // Parse results
  const total = result[0] as number;
  const data: any[] = [];

  // Results come as [total, key1, [field, value, ...], key2, [field, value, ...], ...]
  for (let i = 1; i < result.length; i += 2) {
    const fields = result[i + 1] as string[];
    if (!fields) continue;

    const doc: any = {};
    for (let j = 0; j < fields.length; j += 2) {
      doc[fields[j]] = fields[j + 1];
    }

    // Convert numeric fields
    doc.id = parseInt(doc.id);
    doc.numero = doc.numero ? parseInt(doc.numero) : null;
    doc.ano = doc.ano ? parseInt(doc.ano) : null;
    doc.codTipo = doc.codTipo ? parseInt(doc.codTipo) : null;
    doc.codOrgao = doc.codOrgao ? parseInt(doc.codOrgao) : null;
    doc.idTipoTramitacao = doc.idTipoTramitacao ? parseInt(doc.idTipoTramitacao) : null;

    data.push(doc);
  }

  return { data, total };
}

/**
 * Get total count of proposições in Redis
 */
export async function getProposicoesCount(): Promise<number> {
  try {
    const info = await redis.call("FT.INFO", INDEX_NAME) as any[];
    const numDocsIndex = info.indexOf("num_docs");
    if (numDocsIndex !== -1) {
      return parseInt(info[numDocsIndex + 1]);
    }
    return 0;
  } catch {
    return 0;
  }
}

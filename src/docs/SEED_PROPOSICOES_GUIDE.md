# 🌱 Guia Completo: Importar Proposições em Grande Volume

## Resumo
Este guia explica como importar o arquivo completo `proposicoes-2025.json` com todos os objetos, tratando possíveis erros e garantindo idempotência.

---

## 📋 Como Funciona a Importação

### Estratégia: Batch Processing + Upsert

```
proposicoes-2025.json (10.000+ objetos)
         ↓
    [Batch 1: 500 objetos] ← Transação atômica (tudo ou nada)
    [Batch 2: 500 objetos] ← Transação atômica
    [Batch 3: 500 objetos] ← Transação atômica
         ↓
    ✓ Criadas/Atualizadas no banco
```

### Garantias de Segurança

| Característica | Benefício |
|---|---|
| **Upsert (create or update)** | Se interromper, pode rodar novamente sem duplicar |
| **Batch Transactions** | Se um batch falhar, ele é revertido e tenta continuar |
| **Logging detalhado** | Sabe exatamente qual batch falhou |
| **Idempotente** | Rodar 1x ou 10x = mesmo resultado |

---

## 🚀 Como Usar

### Opção 1: Batch Mode (Recomendado para Grande Volume)

```bash
# Execute o seed em lotes (mais rápido e seguro)
pnpm run db:seed:proposicoes:batch
```

**Vantagens:**
- ⚡ 10x mais rápido (bulk operations)
- 🔄 Processa em lotes de 500
- 🛡️ Transações por batch
- 📊 Progresso visual

---

### Opção 2: Modo Sequencial Original

```bash
# Execute o seed sequencial (mais lento, mais seguro para verificação)
pnpm run db:seed:proposicoes
```

**Vantagens:**
- 🔍 Mais fácil debugar cada item
- 📝 Log detalhado de cada proposição

**Desvantagens:**
- ⏳ Mais lento para 10.000+ items

---

## ⚡ Se Algo Der Errado

### Cenário 1: Seed parou no meio (Ex: batch 5 de 20)

```bash
# Simplesmente execute novamente:
pnpm run db:seed:proposicoes:batch

# ✅ Será retomado automaticamente
# - Batches 1-4 já existem (upsert vai só atualizar)
# - Batch 5+ será reprocessado
```

### Cenário 2: Erro crítico e quer limpar tudo

```bash
# 1. Limpar tabela de proposições
pnpm ts-node scripts/clean-proposicoes.ts

# 2. Rodar seed novamente
pnpm run db:seed:proposicoes:batch
```

---

## 📊 O Que Esperar

### Exemplo: 10.000 proposições

| Métrica | Batch Mode | Sequencial |
|---|---|---|
| **Tempo** | ~30-60s | ~5-10min |
| **Batches** | 20 (500 cada) | 10.000 (1 cada) |
| **Transações** | 20 | 10.000 |
| **Logs** | Limpo (por batch) | Verboso (por item) |

### Saída Esperada:

```
🌱 Iniciando seed de proposições (modo BATCH)...

📝 Total de proposições: 10000
⚙️  Tamanho do batch: 500

📦 Processando batch 1/20...
  ✓ Batch 1 concluído: 500 proposições | Total: 500/10000

📦 Processando batch 2/20...
  ✓ Batch 2 concluído: 500 proposições | Total: 1000/10000

[...]

✅ Seed concluído!

📊 Estatísticas:
  ✓ Processadas: 10000/10000
  ✓ Tempo total: 45.23s
  ⚠️  Falhadas: 0
```

---

## 🔧 Configuração

### Tamanho do Batch

Arquivo: `prisma/seed-proposicoes-batch.ts`

```typescript
const BATCH_SIZE = 500; // ← Ajuste aqui
```

**Recomendações:**
- `250` = Menor risco, mais lento
- `500` = Padrão (recomendado)
- `1000` = Mais rápido, mais risco de timeout

---

## 🎯 Checklist Antes de Importar

- [ ] `.env` possui `DATABASE_URL` e `DIRECT_URL` corretos
- [ ] Supabase PostgreSQL está acessível
- [ ] Arquivo `proposicoes-2025.json` está em `backend/`
- [ ] Schema foi aplicado: `pnpm run prisma:push`
- [ ] Prisma Client gerado: `pnpm run prisma:generate`

---

## 💡 Dicas

### 1. Teste com Amostra Primeiro
```bash
# Copie só os primeiros 100 itens para testar
# Rode o seed
# Se funcionar, rode com tudo
```

### 2. Monitore o Progresso
```bash
# Em outro terminal, monitore o banco:
watch -n 5 'pnpm prisma db execute "SELECT COUNT(*) FROM Proposicao"'
```

### 3. Se Ficar Muito Lento
- Reduza `BATCH_SIZE` em 50% (reduz transações simultâneas)
- Ou aumente em 50% (agrupa mais em cada transação)

---

## 🔗 Próximas Etapas

Após importação bem-sucedida:

```bash
# 1. Verifique dados importados
curl http://localhost:4000/api/proposicoes?limit=5

# 2. Teste filtros
curl http://localhost:4000/api/proposicoes/by-tipo?tipo=PLP

# 3. Verifique estatísticas
curl http://localhost:4000/api/proposicoes/stats
```

---

## 📞 Troubleshooting

| Erro | Solução |
|---|---|
| `Can't reach database server` | Verifique DIRECT_URL em .env |
| `Memory out of bounds` | Reduza BATCH_SIZE para 250 |
| `Unique constraint violation` | Execute `clean-proposicoes.ts` e retry |
| `JSON parse error` | Verifique formato de `proposicoes-2025.json` |

---

## ✅ Pronto!

Você está preparado para importar proposições em grande volume com segurança!

```bash
pnpm run db:seed:proposicoes:batch
```

🚀

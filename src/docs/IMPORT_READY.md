# 🚀 Importação de Proposições: Tudo Pronto!

## ✅ O Que Foi Preparado

Você tem **3 formas** de importar, dependendo do volume e necessidade:

---

## 1️⃣ **Modo BATCH (Recomendado) ⚡ RÁPIDO**

```bash
pnpm run db:seed:proposicoes:batch
```

### Por que usar:
- ✅ **10x mais rápido** (processa 500 itens por transação)
- ✅ **Seguro** (transações por batch)
- ✅ **Idempotente** (pode rodar novamente)
- ✅ **Progresso claro** (log por batch)

### Ideal para:
- **10.000+ proposições**
- Quando quer velocidade

### Tempo esperado:
- 10.000 items = ~30-60 segundos

---

## 2️⃣ **Modo Sequencial (Original) 🔍 DETALHADO**

```bash
pnpm run db:seed:proposicoes
```

### Por que usar:
- ✅ **Mais detalhado** (vê cada item sendo processado)
- ✅ **Mais fácil debugar** (se há erro em item específico)

### Ideal para:
- **Teste/validação**
- Quando quer verificar cada item

### Tempo esperado:
- 10.000 items = ~5-10 minutos

---

## 3️⃣ **Limpeza (Se Algo Der Errado) 🗑️**

```bash
pnpm run db:clean:proposicoes
```

### Por que usar:
- Deletar TODAS as proposições e recomeçar do zero
- Usar SOMENTE em caso de erro crítico

### ⚠️ Use com cuidado!

---

## 🎯 Fluxo Recomendado

### Para Grande Volume:

```bash
# 1. Aplicar schema
pnpm run prisma:push

# 2. Importar em batch
pnpm run db:seed:proposicoes:batch

# 3. Se der erro no meio, simplesmente rode novamente
pnpm run db:seed:proposicoes:batch

# 4. Verificar dados
curl http://localhost:4000/api/proposicoes?limit=5
```

### Se Der Erro Crítico:

```bash
# 1. Limpar tudo
pnpm run db:clean:proposicoes

# 2. Rodar novamente
pnpm run db:seed:proposicoes:batch
```

---

## 🛡️ Garantias de Segurança

| Garantia | Implementado |
|---|---|
| **Idempotência** | ✅ Upsert (cria ou atualiza) |
| **Resumível** | ✅ Se parar, pode rodar novamente |
| **Transações** | ✅ Por batch (tudo ou nada) |
| **Logging** | ✅ Progresso claro |
| **Recuperação** | ✅ Script de limpeza |

---

## 📊 Comparação

| Aspecto | Batch | Sequencial |
|---|---|---|
| Velocidade | ⚡⚡⚡ Rápido | 🐌 Lento |
| Segurança | ✅ Transações | ✅ Upsert |
| Debugging | 🟡 Por batch | ✅ Por item |
| Recomendado | **✅ SIM** | Teste |
| Resumível | ✅ SIM | ✅ SIM |

---

## 🔗 Documentação Completa

Para detalhes completos, veja: **`SEED_PROPOSICOES_GUIDE.md`**

---

## 📝 Próximas Etapas

1. Renomeie seu arquivo para `proposicoes-2025.json` (se necessário)
2. Coloque na raiz de `backend/`
3. Execute: `pnpm run db:seed:proposicoes:batch`
4. Acompanhe o progresso
5. Se der erro, execute novamente!

---

## ✨ Pronto!

Você está 100% preparado para importar proposições em grande volume! 🎉

```bash
pnpm run db:seed:proposicoes:batch
```

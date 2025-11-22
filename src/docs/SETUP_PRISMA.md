# 🚀 Configuração do Prisma com Supabase

## Início Rápido

### 1. Configurar Variáveis de Ambiente

```bash
# Copiar arquivo de exemplo
cp .env.example .env
```

Preencha o `.env` com suas credenciais do Supabase:

```env
# URLs do banco de dados (pegue em: Supabase Dashboard > Settings > Database)
DATABASE_URL="postgresql://postgres.[project-ref]:password@pooler.supabase.com:6543/postgres?pgbouncer=true"
DIRECT_URL="postgresql://postgres.[project-ref]:password@db.[project-ref].supabase.co:5432/postgres"
```

### 2. Instalar Dependências

```bash
pnpm install
```

### 3. Aplicar Schema ao Banco

```bash
# Sincronizar schema com o banco (cria as tabelas)
pnpm run prisma:push
```

### 4. Popular Dados Iniciais (Opcional)

```bash
# Executar script de seed
pnpm run db:seed
```

## Comandos Disponíveis

| Comando | Descrição |
|---------|-----------|
| `pnpm run prisma:generate` | Gerar Prisma Client |
| `pnpm run prisma:push` | Sincronizar schema com banco |
| `pnpm run prisma:migrate` | Criar nova migração |
| `pnpm run prisma:migrate:deploy` | Aplicar migrações em produção |
| `pnpm run db:seed` | Popular dados iniciais |
| `pnpm run prisma:studio` | Abrir UI para visualizar/editar dados |

## Usar Prisma no Código

```typescript
import prisma from "./src/db/prisma";

// Exemplo: criar um usuário
const user = await prisma.user.create({
  data: {
    email: "user@example.com",
    name: "João",
  },
});

// Exemplo: buscar usuários
const users = await prisma.user.findMany();
```

## Modelos Disponíveis

- **User** - Usuários do sistema
- **Session** - Sessões autenticadas
- **Post** - Posts/conteúdo
- **Comment** - Comentários em posts
- **AuditLog** - Logs de auditoria

## Troubleshooting

**Erro: "Can't reach database server"**
- Verifique se `DATABASE_URL` e `DIRECT_URL` estão corretos
- Adicione seu IP na whitelist do Supabase (Settings > Network)

**Erro: "PrismaClient not found"**
- Execute: `pnpm run prisma:generate`

Mais detalhes em: [PRISMA_GUIDE.md](./PRISMA_GUIDE.md)

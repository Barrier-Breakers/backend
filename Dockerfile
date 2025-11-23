# ==================================
# Stage 1: Dependencies
# ==================================
FROM node:20-alpine AS dependencies

# Instalar pnpm globalmente
RUN npm install -g pnpm@10.18.0

WORKDIR /app

# Copiar apenas arquivos de dependências
COPY package.json pnpm-lock.yaml ./

# Copiar o schema do Prisma (necessário para o postinstall gerar o cliente)
COPY prisma ./prisma

# Instalar dependências (por padrão instala dev+prod para permitir builds locais dentro do container);
# se preferir uma imagem menor para produção, mude para `pnpm install --prod --frozen-lockfile`.
RUN pnpm install --frozen-lockfile

# ==================================
# Stage 2: Build
# ==================================
FROM node:20-alpine AS build

# Instalar pnpm
RUN npm install -g pnpm@10.18.0

WORKDIR /app

# Copiar tudo do stage anterior (dependências já instaladas)
COPY --from=dependencies /app/node_modules ./node_modules

# Copiar código fonte
COPY src ./src
COPY prisma ./prisma
COPY tsconfig.json ./
COPY package.json ./
COPY scripts ./scripts

# Compilar TypeScript
RUN pnpm run build

# ==================================
# Stage 3: Production
# ==================================
FROM node:20-alpine AS production

# Metadados
LABEL maintainer="barrier-breakers"
LABEL description="Barrier Breakers Server - Express.js API"

# Instalar apenas dependências de runtime necessárias
RUN apk add --no-cache dumb-init

WORKDIR /app

# Copiar dependências do stage anterior
COPY --from=dependencies /app/node_modules ./node_modules

# Copiar código compilado do build stage
COPY --from=build /app/dist ./dist
COPY package.json ./

# Criar usuário não-root para segurança
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001 && \
    chown -R nodejs:nodejs /app

# Mudar para usuário não-root
USER nodejs

# Variáveis de ambiente padrão (podem ser sobrescritas)
ENV NODE_ENV=production \
    PORT=8080

# Expor porta da aplicação
EXPOSE 8080

# Health check (calls server /health endpoint implemented in src/index.js)
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
    CMD node -e "require('http').get('http://localhost:8080/health', (r) => { process.exit(r.statusCode === 200 ? 0 : 1); })"

# Usar dumb-init para gerenciar sinais adequadamente
ENTRYPOINT ["dumb-init", "--"]

# Comando para iniciar a aplicação
CMD ["node", "dist/index.js"]
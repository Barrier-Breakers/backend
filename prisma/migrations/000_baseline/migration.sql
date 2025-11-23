-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateTable
CREATE TABLE "public"."audit_logs" (
    "id" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "entity" TEXT NOT NULL,
    "entityId" TEXT NOT NULL,
    "changes" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "audit_logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."comments" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "comments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."posts" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."proposicoes" (
    "id" INTEGER NOT NULL,
    "uri" TEXT NOT NULL,
    "siglaTipo" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,
    "ano" INTEGER NOT NULL,
    "codTipo" INTEGER NOT NULL,
    "descricaoTipo" TEXT NOT NULL,
    "ementa" TEXT NOT NULL,
    "ementaDetalhada" TEXT,
    "keywords" TEXT,
    "dataApresentacao" TIMESTAMP(3),
    "uriOrgaoNumerador" TEXT,
    "urlInteiroTeor" TEXT,
    "uriPropAnterior" TEXT,
    "uriPropPrincipal" TEXT,
    "uriPropPosterior" TEXT,
    "statusData" TIMESTAMP(3),
    "statusSequencia" TEXT,
    "uriRelator" TEXT,
    "codOrgao" TEXT,
    "siglaOrgao" TEXT,
    "uriOrgao" TEXT,
    "regime" TEXT,
    "descricaoTramitacao" TEXT,
    "idTipoTramitacao" TEXT,
    "descricaoSituacao" TEXT,
    "idSituacao" TEXT,
    "despacho" TEXT,
    "statusApreciacao" TEXT,
    "statusUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "proposicoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."sessions" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "avatar" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "interestTopics" TEXT[],
    "race" TEXT,
    "ageRange" TEXT,
    "gender" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "audit_logs_createdAt_idx" ON "public"."audit_logs"("createdAt" ASC);

-- CreateIndex
CREATE INDEX "audit_logs_entityId_idx" ON "public"."audit_logs"("entityId" ASC);

-- CreateIndex
CREATE INDEX "audit_logs_entity_idx" ON "public"."audit_logs"("entity" ASC);

-- CreateIndex
CREATE INDEX "comments_postId_idx" ON "public"."comments"("postId" ASC);

-- CreateIndex
CREATE INDEX "comments_userId_idx" ON "public"."comments"("userId" ASC);

-- CreateIndex
CREATE INDEX "posts_userId_idx" ON "public"."posts"("userId" ASC);

-- CreateIndex
CREATE INDEX "proposicoes_ano_idx" ON "public"."proposicoes"("ano" ASC);

-- CreateIndex
CREATE INDEX "proposicoes_descricaoSituacao_idx" ON "public"."proposicoes"("descricaoSituacao" ASC);

-- CreateIndex
CREATE INDEX "proposicoes_numero_idx" ON "public"."proposicoes"("numero" ASC);

-- CreateIndex
CREATE INDEX "proposicoes_siglaTipo_idx" ON "public"."proposicoes"("siglaTipo" ASC);

-- CreateIndex
CREATE INDEX "proposicoes_statusData_idx" ON "public"."proposicoes"("statusData" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "proposicoes_uri_key" ON "public"."proposicoes"("uri" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "sessions_token_key" ON "public"."sessions"("token" ASC);

-- CreateIndex
CREATE INDEX "sessions_userId_idx" ON "public"."sessions"("userId" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "public"."users"("email" ASC);

-- AddForeignKey
ALTER TABLE "public"."comments" ADD CONSTRAINT "comments_postId_fkey" FOREIGN KEY ("postId") REFERENCES "public"."posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."comments" ADD CONSTRAINT "comments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."posts" ADD CONSTRAINT "posts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."sessions" ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

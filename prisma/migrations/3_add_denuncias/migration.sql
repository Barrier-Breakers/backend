-- Create Denuncias table
CREATE TABLE IF NOT EXISTS "public"."denuncias" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT,
    "medias" TEXT[] NOT NULL DEFAULT '{}',
    "status" TEXT NOT NULL DEFAULT 'aberta',
    "tags" TEXT[] NOT NULL DEFAULT '{}',
    "location" geography(Point,4326) NOT NULL,
    "upvotes" INTEGER NOT NULL DEFAULT 0,
    "downvotes" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "denuncias_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "denuncias_userId_idx" ON "public"."denuncias"("userId");
CREATE INDEX "denuncias_createdAt_idx" ON "public"."denuncias"("createdAt");

ALTER TABLE "public"."denuncias" ADD CONSTRAINT "denuncias_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- Create DenunciaVoto table
CREATE TABLE IF NOT EXISTS "public"."denuncia_votos" (
    "id" TEXT NOT NULL,
    "denunciaId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "voto" SMALLINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "denuncia_votos_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "denuncia_votos_denunciaId_userId_key" ON "public"."denuncia_votos"("denunciaId", "userId");
CREATE INDEX "denuncia_votos_denunciaId_idx" ON "public"."denuncia_votos"("denunciaId");
CREATE INDEX "denuncia_votos_userId_idx" ON "public"."denuncia_votos"("userId");

ALTER TABLE "public"."denuncia_votos" ADD CONSTRAINT "denuncia_votos_denunciaId_fkey" FOREIGN KEY ("denunciaId") REFERENCES "public"."denuncias"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."denuncia_votos" ADD CONSTRAINT "denuncia_votos_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- Create DenunciaComentario table
CREATE TABLE IF NOT EXISTS "public"."denuncia_comentarios" (
    "id" TEXT NOT NULL,
    "denunciaId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "texto" TEXT NOT NULL,
    "medias" TEXT[] NOT NULL DEFAULT '{}',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "denuncia_comentarios_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "denuncia_comentarios_denunciaId_idx" ON "public"."denuncia_comentarios"("denunciaId");
CREATE INDEX "denuncia_comentarios_userId_idx" ON "public"."denuncia_comentarios"("userId");

ALTER TABLE "public"."denuncia_comentarios" ADD CONSTRAINT "denuncia_comentarios_denunciaId_fkey" FOREIGN KEY ("denunciaId") REFERENCES "public"."denuncias"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."denuncia_comentarios" ADD CONSTRAINT "denuncia_comentarios_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE "ComentarioLegajo" (
    "id" TEXT NOT NULL,
    "legajoId" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "texto" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ComentarioLegajo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ComentarioLegajo_legajoId_idx" ON "ComentarioLegajo"("legajoId");

-- AddForeignKey
ALTER TABLE "ComentarioLegajo" ADD CONSTRAINT "ComentarioLegajo_legajoId_fkey" FOREIGN KEY ("legajoId") REFERENCES "Legajo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ComentarioLegajo" ADD CONSTRAINT "ComentarioLegajo_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
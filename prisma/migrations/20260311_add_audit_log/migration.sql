-- CreateTable
CREATE TABLE "AuditLog" (
    "id"        TEXT NOT NULL,
    "nivel"     TEXT NOT NULL,
    "accion"    TEXT NOT NULL,
    "usuarioId" TEXT,
    "ip"        TEXT,
    "recurso"   TEXT,
    "detalles"  TEXT,
    "error"     TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AuditLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "AuditLog_usuarioId_idx" ON "AuditLog"("usuarioId");
CREATE INDEX "AuditLog_accion_idx"    ON "AuditLog"("accion");
CREATE INDEX "AuditLog_createdAt_idx" ON "AuditLog"("createdAt");
CREATE INDEX "AuditLog_nivel_idx"     ON "AuditLog"("nivel");
-- CreateTable
CREATE TABLE "Fiscal" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nombre" TEXT NOT NULL,
    "cargo" TEXT,
    "fiscalia" TEXT,
    "secretario" TEXT,
    "dniSecretario" TEXT,
    "dni" TEXT,
    "email" TEXT,
    "emailSecretario" TEXT,
    "direccion" TEXT,
    "telefono" TEXT,
    "telefonoMovil" TEXT,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "usuarioId" TEXT NOT NULL,
    CONSTRAINT "Fiscal_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

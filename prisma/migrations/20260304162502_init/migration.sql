-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nombre" TEXT NOT NULL,
    "usuario" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "rol" TEXT NOT NULL DEFAULT 'investigador',
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Legajo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "numero" TEXT NOT NULL,
    "caratula" TEXT NOT NULL,
    "cuij" TEXT,
    "delito" TEXT NOT NULL,
    "fechaHecho" DATETIME NOT NULL,
    "estado" TEXT NOT NULL DEFAULT 'Activo',
    "observaciones" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "usuarioId" TEXT NOT NULL,
    CONSTRAINT "Legajo_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Victima" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nombre" TEXT NOT NULL,
    "dni" TEXT,
    "telefono" TEXT,
    "email" TEXT,
    "legajoId" TEXT NOT NULL,
    CONSTRAINT "Victima_legajoId_fkey" FOREIGN KEY ("legajoId") REFERENCES "Legajo" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Dispositivo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "tipo" TEXT NOT NULL,
    "marca" TEXT,
    "modelo" TEXT,
    "imei" TEXT,
    "color" TEXT,
    "legajoId" TEXT NOT NULL,
    CONSTRAINT "Dispositivo_legajoId_fkey" FOREIGN KEY ("legajoId") REFERENCES "Legajo" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Oficio" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "numero" TEXT,
    "operadora" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "fechaEnvio" DATETIME,
    "fechaRespuesta" DATETIME,
    "estado" TEXT NOT NULL DEFAULT 'Pendiente',
    "urgencia" TEXT NOT NULL DEFAULT '48 horas',
    "observaciones" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "legajoId" TEXT NOT NULL,
    CONSTRAINT "Oficio_legajoId_fkey" FOREIGN KEY ("legajoId") REFERENCES "Legajo" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Respuesta" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "oficioId" TEXT NOT NULL,
    "datos" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Respuesta_oficioId_fkey" FOREIGN KEY ("oficioId") REFERENCES "Oficio" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_usuario_key" ON "Usuario"("usuario");

-- CreateIndex
CREATE UNIQUE INDEX "Legajo_numero_key" ON "Legajo"("numero");

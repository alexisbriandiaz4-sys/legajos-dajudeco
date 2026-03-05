-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "usuario" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "rol" TEXT NOT NULL DEFAULT 'investigador',
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Legajo" (
    "id" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "caratula" TEXT NOT NULL,
    "cuij" TEXT,
    "delito" TEXT NOT NULL,
    "fechaHecho" TIMESTAMP(3) NOT NULL,
    "estado" TEXT NOT NULL DEFAULT 'Activo',
    "observaciones" TEXT,
    "fiscal" TEXT,
    "emailRespuesta" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "usuarioId" TEXT NOT NULL,

    CONSTRAINT "Legajo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Victima" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "dni" TEXT,
    "telefono" TEXT,
    "email" TEXT,
    "legajoId" TEXT NOT NULL,

    CONSTRAINT "Victima_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dispositivo" (
    "id" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "marca" TEXT,
    "modelo" TEXT,
    "imei" TEXT,
    "color" TEXT,
    "numeroLinea" TEXT,
    "legajoId" TEXT NOT NULL,

    CONSTRAINT "Dispositivo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Oficio" (
    "id" TEXT NOT NULL,
    "numero" TEXT,
    "operadora" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "fechaEnvio" TIMESTAMP(3),
    "fechaRespuesta" TIMESTAMP(3),
    "estado" TEXT NOT NULL DEFAULT 'Pendiente',
    "urgencia" TEXT NOT NULL DEFAULT '48 horas',
    "observaciones" TEXT,
    "columnas" TEXT,
    "tipoConsulta" TEXT,
    "numeroLinea" TEXT,
    "imeiSeleccionado" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "legajoId" TEXT NOT NULL,

    CONSTRAINT "Oficio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Respuesta" (
    "id" TEXT NOT NULL,
    "oficioId" TEXT NOT NULL,
    "datos" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Respuesta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fiscal" (
    "id" TEXT NOT NULL,
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
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "usuarioId" TEXT NOT NULL,

    CONSTRAINT "Fiscal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Configuracion" (
    "id" TEXT NOT NULL DEFAULT 'global',
    "emailRespuesta" TEXT NOT NULL DEFAULT '',
    "diasAlertaMedia" INTEGER NOT NULL DEFAULT 2,
    "diasAlertaAlta" INTEGER NOT NULL DEFAULT 3,
    "diasAlertaCritica" INTEGER NOT NULL DEFAULT 7,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Configuracion_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_usuario_key" ON "Usuario"("usuario");

-- CreateIndex
CREATE UNIQUE INDEX "Legajo_numero_key" ON "Legajo"("numero");

-- AddForeignKey
ALTER TABLE "Legajo" ADD CONSTRAINT "Legajo_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Victima" ADD CONSTRAINT "Victima_legajoId_fkey" FOREIGN KEY ("legajoId") REFERENCES "Legajo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dispositivo" ADD CONSTRAINT "Dispositivo_legajoId_fkey" FOREIGN KEY ("legajoId") REFERENCES "Legajo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Oficio" ADD CONSTRAINT "Oficio_legajoId_fkey" FOREIGN KEY ("legajoId") REFERENCES "Legajo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Respuesta" ADD CONSTRAINT "Respuesta_oficioId_fkey" FOREIGN KEY ("oficioId") REFERENCES "Oficio"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fiscal" ADD CONSTRAINT "Fiscal_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

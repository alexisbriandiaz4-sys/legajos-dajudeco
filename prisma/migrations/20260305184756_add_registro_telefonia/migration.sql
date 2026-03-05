-- CreateTable
CREATE TABLE "RegistroTelefonia" (
    "id" TEXT NOT NULL,
    "anio" INTEGER,
    "nroLegajo" TEXT,
    "nroInterno" INTEGER,
    "cuij" TEXT,
    "fechaHecho" TIMESTAMP(3),
    "fechaIngreso" TIMESTAMP(3),
    "lugarHecho" TEXT,
    "barrio" TEXT,
    "victima" TEXT,
    "causa" TEXT,
    "aparato" TEXT,
    "empresa" TEXT,
    "abonado" TEXT,
    "imei" TEXT,
    "color" TEXT,
    "correo" TEXT,
    "clave" TEXT,
    "fiscal" TEXT,
    "depOrigen" TEXT,
    "nroCom" TEXT,
    "rpiComisaria" TEXT,
    "rpiCompleja" TEXT,
    "observaciones" TEXT,
    "estadoLegajo" TEXT,
    "elevaciones" TEXT,
    "imputados" TEXT,
    "requisa" TEXT,
    "procedimientos" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RegistroTelefonia_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "RegistroTelefonia_victima_idx" ON "RegistroTelefonia"("victima");

-- CreateIndex
CREATE INDEX "RegistroTelefonia_imei_idx" ON "RegistroTelefonia"("imei");

-- CreateIndex
CREATE INDEX "RegistroTelefonia_nroLegajo_idx" ON "RegistroTelefonia"("nroLegajo");

-- CreateIndex
CREATE INDEX "RegistroTelefonia_anio_idx" ON "RegistroTelefonia"("anio");

-- CreateIndex
CREATE INDEX "RegistroTelefonia_causa_idx" ON "RegistroTelefonia"("causa");

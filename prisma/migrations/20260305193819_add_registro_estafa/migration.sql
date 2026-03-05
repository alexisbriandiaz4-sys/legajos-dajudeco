-- CreateTable
CREATE TABLE "RegistroEstafa" (
    "id" TEXT NOT NULL,
    "nroInterno" INTEGER,
    "cuij" TEXT,
    "fechaHecho" TIMESTAMP(3),
    "fechaDenuncia" TIMESTAMP(3),
    "dependencia" TEXT,
    "nroLegajo" TEXT,
    "recibido" TEXT,
    "victima" TEXT,
    "telefonoVictima" TEXT,
    "caratula" TEXT,
    "fiscal" TEXT,
    "ardid" TEXT,
    "seudonimo" TEXT,
    "telefonoReferencia" TEXT,
    "nombreReferencia" TEXT,
    "imei" TEXT,
    "otrosTelefonos" TEXT,
    "cbu" TEXT,
    "titulares" TEXT,
    "otrosCbu" TEXT,
    "estadoLegajo" TEXT,
    "complementos" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RegistroEstafa_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "RegistroEstafa_victima_idx" ON "RegistroEstafa"("victima");

-- CreateIndex
CREATE INDEX "RegistroEstafa_nroLegajo_idx" ON "RegistroEstafa"("nroLegajo");

-- CreateIndex
CREATE INDEX "RegistroEstafa_ardid_idx" ON "RegistroEstafa"("ardid");

-- CreateIndex
CREATE INDEX "RegistroEstafa_imei_idx" ON "RegistroEstafa"("imei");

-- CreateIndex
CREATE INDEX "RegistroEstafa_cbu_idx" ON "RegistroEstafa"("cbu");

-- CreateIndex
CREATE INDEX "RegistroEstafa_fechaHecho_idx" ON "RegistroEstafa"("fechaHecho");

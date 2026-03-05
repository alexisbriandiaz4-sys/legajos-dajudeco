-- CreateTable
CREATE TABLE "ArchivoLegajo" (
    "id" TEXT NOT NULL,
    "legajoId" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "publicId" TEXT NOT NULL,
    "tamano" INTEGER,
    "esAnalizable" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ArchivoLegajo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ArchivoLegajo_legajoId_idx" ON "ArchivoLegajo"("legajoId");

-- AddForeignKey
ALTER TABLE "ArchivoLegajo" ADD CONSTRAINT "ArchivoLegajo_legajoId_fkey" FOREIGN KEY ("legajoId") REFERENCES "Legajo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

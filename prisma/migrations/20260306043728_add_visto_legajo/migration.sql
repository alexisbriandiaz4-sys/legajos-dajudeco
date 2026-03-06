-- AlterTable
ALTER TABLE "Legajo" ADD COLUMN     "origenId" TEXT,
ADD COLUMN     "origenTipo" TEXT,
ADD COLUMN     "visto" BOOLEAN NOT NULL DEFAULT false;

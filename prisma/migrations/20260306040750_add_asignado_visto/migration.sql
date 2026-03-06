-- AlterTable
ALTER TABLE "RegistroEstafa" ADD COLUMN     "asignadoA" TEXT,
ADD COLUMN     "visto" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "RegistroTelefonia" ADD COLUMN     "asignadoA" TEXT,
ADD COLUMN     "visto" BOOLEAN NOT NULL DEFAULT false;

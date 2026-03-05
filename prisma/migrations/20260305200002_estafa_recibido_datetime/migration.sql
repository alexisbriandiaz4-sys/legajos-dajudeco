/*
  Warnings:

  - The `recibido` column on the `RegistroEstafa` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "RegistroEstafa" DROP COLUMN "recibido",
ADD COLUMN     "recibido" TIMESTAMP(3);

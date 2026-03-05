-- AlterTable
ALTER TABLE "RegistroEstafa" ADD COLUMN     "filaExcel" INTEGER;

-- CreateIndex
CREATE INDEX "RegistroEstafa_filaExcel_idx" ON "RegistroEstafa"("filaExcel");

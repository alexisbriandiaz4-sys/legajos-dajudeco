-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Configuracion" (
    "id" TEXT NOT NULL PRIMARY KEY DEFAULT 'global',
    "emailRespuesta" TEXT NOT NULL DEFAULT '',
    "diasAlertaMedia" INTEGER NOT NULL DEFAULT 2,
    "diasAlertaAlta" INTEGER NOT NULL DEFAULT 3,
    "diasAlertaCritica" INTEGER NOT NULL DEFAULT 7,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Configuracion" ("createdAt", "emailRespuesta", "id", "updatedAt") SELECT "createdAt", "emailRespuesta", "id", "updatedAt" FROM "Configuracion";
DROP TABLE "Configuracion";
ALTER TABLE "new_Configuracion" RENAME TO "Configuracion";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

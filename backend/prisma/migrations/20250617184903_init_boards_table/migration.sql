/*
  Warnings:

  - You are about to drop the column `gifSrc` on the `Kudo` table. All the data in the column will be lost.
  - Added the required column `gifSource` to the `Kudo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Kudo" DROP COLUMN "gifSrc",
ADD COLUMN     "gifSource" TEXT NOT NULL;

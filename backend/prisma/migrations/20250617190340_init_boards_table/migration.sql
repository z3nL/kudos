/*
  Warnings:

  - The primary key for the `Kudo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Kudo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Kudo" DROP CONSTRAINT "Kudo_pkey",
DROP COLUMN "id",
ADD COLUMN     "kudoID" SERIAL NOT NULL,
ADD CONSTRAINT "Kudo_pkey" PRIMARY KEY ("kudoID");

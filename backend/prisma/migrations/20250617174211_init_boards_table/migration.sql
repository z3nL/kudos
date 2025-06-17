/*
  Warnings:

  - The primary key for the `Board` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Board` table. All the data in the column will be lost.
  - You are about to drop the column `imageSrc` on the `Board` table. All the data in the column will be lost.
  - Added the required column `author` to the `Board` table without a default value. This is not possible if the table is not empty.
  - Added the required column `desc` to the `Board` table without a default value. This is not possible if the table is not empty.
  - Added the required column `boardID` to the `Kudo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Board" DROP CONSTRAINT "Board_pkey",
DROP COLUMN "id",
DROP COLUMN "imageSrc",
ADD COLUMN     "author" TEXT NOT NULL,
ADD COLUMN     "boardID" SERIAL NOT NULL,
ADD COLUMN     "desc" TEXT NOT NULL,
ADD CONSTRAINT "Board_pkey" PRIMARY KEY ("boardID");

-- AlterTable
ALTER TABLE "Kudo" ADD COLUMN     "boardID" INTEGER NOT NULL,
ADD COLUMN     "voteCount" INTEGER NOT NULL DEFAULT 0;

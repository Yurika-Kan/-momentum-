/*
  Warnings:

  - You are about to drop the column `mentor` on the `User` table. All the data in the column will be lost.
  - Added the required column `mentor_mode` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "mentor",
ADD COLUMN     "mentor_mode" BOOLEAN NOT NULL;

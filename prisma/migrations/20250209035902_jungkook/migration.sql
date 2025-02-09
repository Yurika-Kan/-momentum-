/*
  Warnings:

  - Added the required column `mentor` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "mentor" BOOLEAN NOT NULL;

-- AddForeignKey
ALTER TABLE "Proposal" ADD CONSTRAINT "Proposal_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

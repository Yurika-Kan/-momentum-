/*
  Warnings:

  - You are about to drop the `Specialty` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Tagged` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ProposalToTag` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `mentor` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Tagged" DROP CONSTRAINT "Tagged_prop_id_fkey";

-- DropForeignKey
ALTER TABLE "Tagged" DROP CONSTRAINT "Tagged_tag_fkey";

-- DropForeignKey
ALTER TABLE "TechStack" DROP CONSTRAINT "TechStack_special_tag_fkey";

-- DropForeignKey
ALTER TABLE "_ProposalToTag" DROP CONSTRAINT "_ProposalToTag_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProposalToTag" DROP CONSTRAINT "_ProposalToTag_B_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "mentor" BOOLEAN NOT NULL;

-- DropTable
DROP TABLE "Specialty";

-- DropTable
DROP TABLE "Tagged";

-- DropTable
DROP TABLE "_ProposalToTag";

-- CreateTable
CREATE TABLE "TagsInPost" (
    "prop_id" INTEGER NOT NULL,
    "tag" TEXT NOT NULL,

    CONSTRAINT "TagsInPost_pkey" PRIMARY KEY ("prop_id","tag")
);

-- CreateTable
CREATE TABLE "TagsOnUser" (
    "specialty" TEXT NOT NULL,

    CONSTRAINT "TagsOnUser_pkey" PRIMARY KEY ("specialty")
);

-- AddForeignKey
ALTER TABLE "Proposal" ADD CONSTRAINT "Proposal_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TagsInPost" ADD CONSTRAINT "TagsInPost_prop_id_fkey" FOREIGN KEY ("prop_id") REFERENCES "Proposal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TagsInPost" ADD CONSTRAINT "TagsInPost_tag_fkey" FOREIGN KEY ("tag") REFERENCES "Tag"("tag") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TechStack" ADD CONSTRAINT "TechStack_special_tag_fkey" FOREIGN KEY ("special_tag") REFERENCES "TagsOnUser"("specialty") ON DELETE RESTRICT ON UPDATE CASCADE;

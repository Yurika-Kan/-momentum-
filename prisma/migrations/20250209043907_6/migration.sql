/*
  Warnings:

  - You are about to drop the `TagsInPost` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TagsInPost" DROP CONSTRAINT "TagsInPost_prop_id_fkey";

-- DropForeignKey
ALTER TABLE "TagsInPost" DROP CONSTRAINT "TagsInPost_tag_fkey";

-- DropTable
DROP TABLE "TagsInPost";

-- CreateTable
CREATE TABLE "TagsOnPost" (
    "prop_id" INTEGER NOT NULL,
    "tag" TEXT NOT NULL,

    CONSTRAINT "TagsOnPost_pkey" PRIMARY KEY ("prop_id","tag")
);

-- AddForeignKey
ALTER TABLE "TagsOnPost" ADD CONSTRAINT "TagsOnPost_prop_id_fkey" FOREIGN KEY ("prop_id") REFERENCES "Proposal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TagsOnPost" ADD CONSTRAINT "TagsOnPost_tag_fkey" FOREIGN KEY ("tag") REFERENCES "Tag"("tag") ON DELETE RESTRICT ON UPDATE CASCADE;

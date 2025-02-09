/*
  Warnings:

  - The primary key for the `TagsOnUser` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `specialty` on the `TagsOnUser` table. All the data in the column will be lost.
  - You are about to drop the `TechStack` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `Tag` to the `TagsOnUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user` to the `TagsOnUser` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "TechStack" DROP CONSTRAINT "TechStack_special_tag_fkey";

-- DropForeignKey
ALTER TABLE "TechStack" DROP CONSTRAINT "TechStack_user_id_fkey";

-- AlterTable
ALTER TABLE "TagsOnUser" DROP CONSTRAINT "TagsOnUser_pkey",
DROP COLUMN "specialty",
ADD COLUMN     "Tag" TEXT NOT NULL,
ADD COLUMN     "user" TEXT NOT NULL,
ADD CONSTRAINT "TagsOnUser_pkey" PRIMARY KEY ("Tag");

-- DropTable
DROP TABLE "TechStack";

-- AddForeignKey
ALTER TABLE "TagsOnUser" ADD CONSTRAINT "TagsOnUser_user_fkey" FOREIGN KEY ("user") REFERENCES "User"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

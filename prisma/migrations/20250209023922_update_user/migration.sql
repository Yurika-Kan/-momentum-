/*
  Warnings:

  - You are about to drop the `Account` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Account" DROP CONSTRAINT "Account_userId_fkey";

-- DropTable
DROP TABLE "Account";

-- CreateTable
CREATE TABLE "Specialty" (
    "specialty" TEXT NOT NULL,

    CONSTRAINT "Specialty_pkey" PRIMARY KEY ("specialty")
);

-- CreateTable
CREATE TABLE "TechStack" (
    "special_tag" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "TechStack_pkey" PRIMARY KEY ("special_tag","user_id")
);

-- AddForeignKey
ALTER TABLE "TechStack" ADD CONSTRAINT "TechStack_special_tag_fkey" FOREIGN KEY ("special_tag") REFERENCES "Specialty"("specialty") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TechStack" ADD CONSTRAINT "TechStack_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

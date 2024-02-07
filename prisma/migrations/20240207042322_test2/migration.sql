/*
  Warnings:

  - You are about to drop the column `address1` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `address2` on the `user` table. All the data in the column will be lost.
  - Added the required column `address_1` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address_2` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user" DROP COLUMN "address1",
DROP COLUMN "address2",
ADD COLUMN     "address_1" TEXT NOT NULL,
ADD COLUMN     "address_2" TEXT NOT NULL;

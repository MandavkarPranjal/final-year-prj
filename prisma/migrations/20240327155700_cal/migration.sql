/*
  Warnings:

  - Added the required column `leave` to the `event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "event" ADD COLUMN     "leave" BOOLEAN NOT NULL,
ADD COLUMN     "userId" TEXT;

-- AddForeignKey
ALTER TABLE "event" ADD CONSTRAINT "event_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

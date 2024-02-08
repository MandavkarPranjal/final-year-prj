/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `appointment` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `Specialization` to the `appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `appointment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "appointment" ADD COLUMN     "Specialization" TEXT NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "appointment_email_key" ON "appointment"("email");

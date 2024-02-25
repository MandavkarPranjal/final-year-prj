/*
  Warnings:

  - You are about to drop the column `booking_date` on the `appointment` table. All the data in the column will be lost.
  - You are about to drop the column `booking_time` on the `appointment` table. All the data in the column will be lost.
  - You are about to drop the column `first_name` on the `appointment` table. All the data in the column will be lost.
  - You are about to drop the column `last_name` on the `appointment` table. All the data in the column will be lost.
  - You are about to drop the column `phone_number` on the `appointment` table. All the data in the column will be lost.
  - Added the required column `bookingDate` to the `appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bookingTime` to the `appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `appointment` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "appointment_email_key";

-- DropIndex
DROP INDEX "appointment_phone_number_key";

-- AlterTable
ALTER TABLE "appointment" DROP COLUMN "booking_date",
DROP COLUMN "booking_time",
DROP COLUMN "first_name",
DROP COLUMN "last_name",
DROP COLUMN "phone_number",
ADD COLUMN     "bookingDate" TEXT NOT NULL,
ADD COLUMN     "bookingTime" TEXT NOT NULL,
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "lastName" TEXT NOT NULL,
ADD COLUMN     "phoneNumber" TEXT NOT NULL;

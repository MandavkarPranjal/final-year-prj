-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER');

-- CreateTable
CREATE TABLE "appointment" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "bookingDate" TEXT NOT NULL,
    "Specialization" TEXT NOT NULL,
    "bookingTime" TEXT NOT NULL,

    CONSTRAINT "appointment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "role" "Role"[],
    "address_1" TEXT NOT NULL,
    "address_2" TEXT NOT NULL,
    "specialty" TEXT,
    "hashed_password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "event" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "start" TEXT NOT NULL,
    "end" TEXT NOT NULL,
    "allDay" BOOLEAN NOT NULL,

    CONSTRAINT "event_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_phoneNumber_key" ON "user"("phoneNumber");

-- CreateTable
CREATE TABLE "receipt" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,
    "date" TEXT NOT NULL,

    CONSTRAINT "receipt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "expense" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "receiptId" TEXT NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,
    "date" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "expense_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "docRecipt" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,
    "date" TEXT NOT NULL,
    "doctorId" TEXT NOT NULL,

    CONSTRAINT "docRecipt_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "expense" ADD CONSTRAINT "expense_receiptId_fkey" FOREIGN KEY ("receiptId") REFERENCES "receipt"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "docRecipt" ADD CONSTRAINT "docRecipt_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "doctor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

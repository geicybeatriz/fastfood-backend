/*
  Warnings:

  - Added the required column `payment` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Payment" AS ENUM ('cash', 'debit_card', 'credit_card');

-- AlterEnum
ALTER TYPE "categories" ADD VALUE 'combo';

-- AlterTable
ALTER TABLE "orders" ADD COLUMN     "payment" "Payment" NOT NULL;

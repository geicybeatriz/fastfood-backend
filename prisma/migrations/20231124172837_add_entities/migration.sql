-- CreateEnum
CREATE TYPE "categories" AS ENUM ('drinks', 'side_dishes', 'snacks', 'desserts');

-- CreateEnum
CREATE TYPE "status" AS ENUM ('created', 'cancelled', 'completed', 'preparing');

-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "picture" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,
    "category" "categories" NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "additionals" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "picture" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "additionals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "status" "status" NOT NULL DEFAULT 'created',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orderItemDetails" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "orderId" INTEGER NOT NULL,
    "observations" TEXT,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "orderItemDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orderItemAdditionals" (
    "id" SERIAL NOT NULL,
    "additionalId" INTEGER NOT NULL,
    "orderItemId" INTEGER NOT NULL,

    CONSTRAINT "orderItemAdditionals_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "orderItemDetails" ADD CONSTRAINT "orderItemDetails_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orderItemDetails" ADD CONSTRAINT "orderItemDetails_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orderItemAdditionals" ADD CONSTRAINT "orderItemAdditionals_additionalId_fkey" FOREIGN KEY ("additionalId") REFERENCES "additionals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orderItemAdditionals" ADD CONSTRAINT "orderItemAdditionals_orderItemId_fkey" FOREIGN KEY ("orderItemId") REFERENCES "orderItemDetails"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

import { Product, Additional } from '@prisma/client';
import prisma from 'config/database';
import products from './factory/productsFactory';
import additionals from './factory/additionalsFactory';

type CreateProduct = Omit<Product, 'id'>;
type CreateAdditional = Omit<Additional, 'id'>;

async function main() {
  const productsList: CreateProduct[] = products;
  const additionalsList: CreateAdditional[] = additionals;

  await prisma.product.createMany({
    data: productsList,
    skipDuplicates: true,
  });

  await prisma.additional.createMany({
    data: additionalsList,
    skipDuplicates: true,
  });
}

main()
  .catch(e => {
    // eslint-disable-next-line no-console
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

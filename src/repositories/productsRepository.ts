import { Product } from '@prisma/client';
import prisma from '../config/database';

async function findAll() {
  const products: Product[] = await prisma.product.findMany();
  return products;
}

const productsRepository = {
  findAll,
};

export default productsRepository;

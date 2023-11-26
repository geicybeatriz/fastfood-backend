import { Category, Product } from '@prisma/client';
import prisma from '../config/database';

async function findAll() {
  const products: Product[] = await prisma.product.findMany();
  return products;
}

async function findByName(name: string) {
  const products: Product[] = await prisma.product.findMany({
    where: { name: { search: name, mode: 'insensitive' } },
  });
  return products;
}

async function findByCategory(data: Category) {
  const products: Product[] = await prisma.product.findMany({
    where: { category: data },
  });
  return products;
}

const productsRepository = {
  findAll,
  findByName,
  findByCategory,
};

export default productsRepository;

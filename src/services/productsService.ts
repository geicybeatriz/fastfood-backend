import { Product } from '@prisma/client';
import productsRepository from '../repositories/productsRepository';

async function findAll() {
  const products: Product[] = await productsRepository.findAll();
  return products;
}

const productsService = {
  findAll,
};

export default productsService;

import { Category, Product } from '@prisma/client';
import { CustomError } from '../interfaces/errorInterface';
import productsRepository from '../repositories/productsRepository';

async function findAll() {
  const products: Product[] = await productsRepository.findAll();
  return products;
}

async function findByName(name: string): Promise<Product[]> {
  const products: Product[] = await productsRepository.findByName(name);

  if (products.length === 0) {
    // eslint-disable-next-line no-throw-literal
    throw { type: 'not found', message: 'product not found' } as CustomError;
  }
  return products;
}

async function findByCategory(data: string) {
  const categoryName = Object.values(Category).filter(item => data === item);

  if (categoryName.length === 0) {
    // eslint-disable-next-line no-throw-literal
    throw { type: 'not found', message: 'category not found' } as CustomError;
  }

  const products: Product[] = await productsRepository.findByCategory(
    categoryName[0],
  );
  return products;
}

const productsService = {
  findAll,
  findByName,
  findByCategory,
};

export default productsService;

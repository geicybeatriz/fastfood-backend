/* eslint-disable no-throw-literal */
import { Category, Product } from '@prisma/client';
import { CustomError } from '../interfaces/errorInterface';
import productsRepository from '../repositories/productsRepository';

async function findAll(): Promise<Product[]> {
  const products: Product[] = await productsRepository.findAll();
  return products;
}

async function findById(id: number): Promise<Product> {
  const product = await productsRepository.findById(id);
  if (!product) {
    throw { type: 'not found', message: 'product not found' } as CustomError;
  }
  return product;
}

async function findBySearchTerm(term: string): Promise<Product[]> {
  if (!term)
    throw { type: 'not found', message: 'product not found' } as CustomError;
  // eslint-disable-next-line no-restricted-globals
  if (!isNaN(Number(term))) {
    const product = await findById(parseInt(term, 10));
    return [product];
  }

  const products: Product[] = await productsRepository.findByName(term);
  if (products.length === 0) {
    throw { type: 'not found', message: 'product not found' } as CustomError;
  }
  return products;
}

async function findByCategory(data: string): Promise<Product[]> {
  const categoryName = Object.values(Category).filter(item => data === item);

  if (categoryName.length === 0) {
    throw { type: 'not found', message: 'category not found' } as CustomError;
  }

  const products: Product[] = await productsRepository.findByCategory(
    categoryName[0],
  );
  return products;
}

const productsService = {
  findAll,
  findBySearchTerm,
  findByCategory,
  findById,
};

export default productsService;

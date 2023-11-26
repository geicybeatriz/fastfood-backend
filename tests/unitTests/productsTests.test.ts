import { Product } from '@prisma/client';
import productsRepository from '../../src/repositories/productsRepository';

describe('get all products', () => {
  it('should return a list of products', async () => {
    const products: Product[] = await productsRepository.findAll();
    expect(products).not.toBeNull();
  });
});

describe('get products filtered by categories', () => {
  it('should return a list of products', async () => {
    const products: Product[] =
      await productsRepository.findByCategory('snacks');
    expect(products).not.toBeNull();
  });
});

describe('get products filtered by name', () => {
  it('should return a list of products', async () => {
    const products: Product[] = await productsRepository.findByName('bacon');
    expect(products).not.toBeNull();
  });
});

describe('get products filtered by Id', () => {
  it('should return a product', async () => {
    const product: Product = await productsRepository.findById(2);
    expect(product).not.toBeNull();
  });
});

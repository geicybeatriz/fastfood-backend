import supertest from 'supertest';
import app from '../../src/app';

const agent = supertest(app);

describe('GET /products', () => {
  it('should return status 200 and a list of products.', async () => {
    const productsList = await agent.get('/products');
    expect(productsList.status).toEqual(200);
    expect(productsList.body).not.toBeNull();
  });
});

describe('GET /products/category/:categoryName', async () => {
  const categories = ['snacks', 'drinks', 'side_dishes', 'desserts', 'combo'];

  it('should return status 200 and a list of products filtered by category.', async () => {
    categories.forEach(async item => {
      const productsList = await agent.get(`/category/${item}`);
      expect(productsList.status).toEqual(200);
      expect(productsList.body).not.toBeNull();
    });
  });

  it('should return status 404 and a message saying: category not found.', async () => {
    const products = await agent.get('/category/fail');
    expect(products.status).toEqual(404);
  });
});

describe('GET /products/search', () => {
  it('should return status 200 and a list of products filtered by name.', async () => {
    const productsList = await agent.get('/search?term=bacon');
    expect(productsList.status).toEqual(200);
    expect(productsList.body).not.toBeNull();
  });

  it('should return status 200 and a product filtered by id.', async () => {
    const productsList = await agent.get('/products/search?term=3');
    expect(productsList.status).toEqual(200);
    expect(productsList.body).not.toBeNull();
  });

  it('should return status 404 and a message saying: product not found.', async () => {
    const products = await agent.get('/products/search?term=');
    expect(products.status).toEqual(404);
  });

  it('should return status 404 and a message saying: product not found.', async () => {
    const products = await agent.get('/products/search?term=45');
    expect(products.status).toEqual(404);
  });
});

describe('GET /products/product/:id', async () => {
  it('should return status 200 and a list of products filtered by category.', async () => {
    const productsList = await agent.get('/products/product/2');
    expect(productsList.status).toEqual(200);
    expect(productsList.body).not.toBeNull();
  });

  it('should return status 404 and a message saying: product not found.', async () => {
    const products = await agent.get('/products/product/45');
    expect(products.status).toEqual(404);
  });
});

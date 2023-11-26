import { Product } from '@prisma/client';
import { Request, Response } from 'express';
import productsService from '../services/productsService';

async function findAll(req: Request, res: Response) {
  const productsList: Product[] = await productsService.findAll();
  res.status(200).send(productsList);
}

async function findByCategory(req: Request, res: Response) {
  const { categoryName } = req.params;
  const products: Product[] =
    await productsService.findByCategory(categoryName);
  res.status(200).send(products);
}

async function findBySearchTerm(req: Request, res: Response) {
  const searchTerm = req.query.term as string;
  const product: Product[] = await productsService.findBySearchTerm(searchTerm);
  res.status(200).send(product);
}

const productsController = {
  findAll,
  findByCategory,
  findBySearchTerm,
};

export default productsController;

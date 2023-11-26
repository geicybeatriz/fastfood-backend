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

const productsController = {
  findAll,
  findByCategory,
};

export default productsController;

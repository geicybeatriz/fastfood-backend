import { Product } from '@prisma/client';
import { Request, Response } from 'express';
import productsService from 'services/productsService';

async function findAll(req: Request, res: Response) {
  const products: Product[] = await productsService.findAll();
  res.status(200).send(products);
}

export default {
  findAll,
};

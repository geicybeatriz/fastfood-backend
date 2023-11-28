import { Request, Response } from 'express';
import ordersService from '../services/ordersService';

async function addProductOrder(req: Request, res: Response) {
  await ordersService.createOrder(req.body);
  res.sendStatus(201);
}

const ordersController = {
  addProductOrder,
};

export default ordersController;

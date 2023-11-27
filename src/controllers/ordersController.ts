import { Request, Response } from 'express';
import orderDetailsService from '../services/orderItemDetailsService';

async function addProductOrder(req: Request, res: Response) {
  // eslint-disable-next-line no-console
  console.log(req.body);
  await orderDetailsService.createOrderItemDetails(req.body);
  res.sendStatus(201);
}

const ordersController = {
  addProductOrder,
};

export default ordersController;

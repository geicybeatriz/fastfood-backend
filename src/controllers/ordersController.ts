import { Order } from '@prisma/client';
import { Request, Response } from 'express';
import ordersService from '../services/ordersService';

async function addProductOrder(req: Request, res: Response) {
  await ordersService.createOrder(req.body);
  res.sendStatus(201);
}

async function getAllOrdersExceptCancelledStatus(req: Request, res: Response) {
  const orders: Order[] =
    await ordersService.getAllOrdersExceptCancelledStatus();
  res.status(200).send(orders);
}

async function updateOrderStatus(req: Request, res: Response) {
  const { orderId } = req.params;
  const { status } = req.body;
  const order: Order = await ordersService.updateOrderStatus(
    parseInt(orderId, 10),
    status,
  );

  res.status(200).send(order);
}

async function findOrdersByStatus(req: Request, res: Response) {
  const orders: Order[] = await ordersService.findOrdersByStatus();
  res.status(200).send(orders);
}

const ordersController = {
  addProductOrder,
  getAllOrdersExceptCancelledStatus,
  updateOrderStatus,
  findOrdersByStatus,
};

export default ordersController;

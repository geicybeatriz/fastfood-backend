import { Order } from '@prisma/client';
import ordersRepository from '../repositories/ordersRepository';

export type CreateOrderData = Omit<Order, 'id' | 'name'>;

async function createOrder() {
  const orderId: number = await ordersRepository.createOrder();
  return orderId;
}

async function findOrderById(id: number) {
  const order: Order = await ordersRepository.findById(id);
  return order;
}

async function checkOrderById(id: number) {
  const order: Order = await findOrderById(id);
  if (!order) {
    const newOrder: number = await createOrder();
    return newOrder;
  }
  return order.id;
}

const ordersService = {
  createOrder,
  findOrderById,
  checkOrderById,
};

export default ordersService;

import { Order } from '@prisma/client';
import ordersRepository from '../repositories/ordersRepository';
import orderDetailsService from './orderItemDetailsService';
import { CustomError } from '../interfaces/errorInterface';
import { AddProductsOrderData } from '../interfaces/addProductInterface';

export type CreateOrderData = Omit<Order, 'id'>;

async function createOrder(data: AddProductsOrderData) {
  const { name, payment, productsList } = data;
  const orderId: number = await ordersRepository.createOrder(name, payment);
  const orderItemsAmount: number =
    await orderDetailsService.createOrderItemDetails(productsList, orderId);
  await ordersRepository.updateOrder(orderId, orderItemsAmount);
  return orderId;
}

async function findOrderById(id: number) {
  const order: Order = await ordersRepository.findById(id);
  return order;
}

async function checkOrderById(id: number) {
  const order: Order = await findOrderById(id);
  if (!order) {
    // eslint-disable-next-line no-throw-literal
    throw { type: 'not found', message: 'order not found' } as CustomError;
  }
  return order.id;
}

const ordersService = {
  createOrder,
  findOrderById,
  checkOrderById,
};

export default ordersService;

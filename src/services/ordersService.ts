import { Order, Status } from '@prisma/client';
import { AddProductsOrderData } from '../interfaces/addProductInterface';
import { CustomError } from '../interfaces/errorInterface';
import ordersRepository from '../repositories/ordersRepository';
import orderDetailsService from './orderItemDetailsService';

export type CreateOrderData = Omit<Order, 'id'>;

async function createOrder(data: AddProductsOrderData) {
  const { name, payment, productsList } = data;
  const orderId: number = await ordersRepository.createOrder(name, payment);

  const orderItemsAmount: number =
    await orderDetailsService.createOrderItemDetails(productsList, orderId);

  await ordersRepository.updateOrder(orderId, orderItemsAmount);
  const newOrder = await ordersRepository.getOrderDataById(orderId);
  return newOrder;
}

async function checkOrderById(id: number) {
  const order: Order = await ordersRepository.findById(id);
  if (!order) {
    // eslint-disable-next-line no-throw-literal
    throw { type: 'not found', message: 'order not found' } as CustomError;
  }
  return order.id;
}

async function getAllOrdersExceptCancelledStatus() {
  const ordersList =
    await ordersRepository.findOrdersDataExceptCancelledStatus();
  return ordersList;
}

async function findOrdersByStatus() {
  const orders: Order[] = await ordersRepository.getUserByOrderStatus();
  return orders;
}

async function updateOrderStatus(id: number, status: string) {
  await checkOrderById(id);
  const newStatus = Object.values(Status).filter(item => status === item);
  const order: Order = await ordersRepository.updateStatus(id, newStatus[0]);
  return order;
}

const ordersService = {
  createOrder,
  checkOrderById,
  getAllOrdersExceptCancelledStatus,
  updateOrderStatus,
  findOrdersByStatus,
};

export default ordersService;

import { $Enums, Order, Status } from '@prisma/client';
import prisma from '../config/database';

async function createOrder(name: string, payment: $Enums.Payment) {
  const order = await prisma.order.create({
    data: {
      name,
      payment,
      status: 'created',
      amount: 0.0,
    },
  });
  return order.id;
}

async function findById(id: number) {
  const order: Order = await prisma.order.findFirst({
    where: { id },
  });
  return order;
}

async function updateOrder(id: number, amount: number) {
  const order: Order = await prisma.order.update({
    where: { id },
    data: {
      amount,
      status: 'preparing',
    },
  });
  return order;
}

async function updateStatus(id: number, status: Status) {
  const order: Order = await prisma.order.update({
    where: { id },
    data: status,
  });
  return order;
}

const ordersRepository = {
  createOrder,
  findById,
  updateOrder,
  updateStatus,
};

export default ordersRepository;

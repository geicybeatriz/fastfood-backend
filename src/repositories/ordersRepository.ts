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
    data: { status },
  });
  return order;
}

async function getOrderDataById(id: number) {
  const order = await prisma.order.findFirst({
    where: { id },
    select: {
      name: true,
      id: true,
      amount: true,
      createdAt: true,
      itemDetails: {
        select: {
          quantity: true,
          observations: true,
          product: {
            select: {
              name: true,
            },
          },
          itemAdditional: {
            select: {
              additional: {
                select: {
                  name: true,
                },
              },
            },
          },
        },
      },
    },
  });
  return order;
}

async function findOrdersDataExceptCancelledStatus() {
  const orders: Order[] = await prisma.order.findMany({
    where: {
      NOT: { status: 'cancelled' },
    },
    include: {
      itemDetails: {
        include: {
          product: true,
          itemAdditional: {
            include: {
              additional: true,
            },
          },
        },
      },
    },
  });
  return orders;
}

async function getUserByOrderStatus() {
  const orders: Order[] = await prisma.order.findMany({
    where: {
      NOT: {
        status: 'cancelled',
      },
    },
    orderBy: {
      updatedAt: 'asc',
    },
  });
  return orders;
}

const ordersRepository = {
  createOrder,
  findById,
  updateOrder,
  updateStatus,
  findOrdersDataExceptCancelledStatus,
  getUserByOrderStatus,
  getOrderDataById,
};

export default ordersRepository;

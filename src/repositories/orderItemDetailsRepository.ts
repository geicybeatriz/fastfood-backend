import { OrderItemDetails } from '@prisma/client';
import prisma from '../config/database';
import { CreateOrderItemDetails } from '../services/orderItemDetailsService';

async function create(data: CreateOrderItemDetails) {
  const orderDetailsId = await prisma.orderItemDetails.create({ data });
  return orderDetailsId.id;
}

async function findById(id: number) {
  const orderItem = await prisma.orderItemDetails.findFirst({
    where: { id },
  });
  return orderItem;
}

async function findByOrderId(id: number) {
  const orderList: OrderItemDetails[] = await prisma.orderItemDetails.findMany({
    where: {
      orderId: id,
    },
  });
  return orderList;
}

async function deleteById(id: number) {
  await prisma.orderItemDetails.delete({
    where: { id },
  });
}

const itemDetailsRepository = {
  create,
  findById,
  deleteById,
  findByOrderId,
};

export default itemDetailsRepository;

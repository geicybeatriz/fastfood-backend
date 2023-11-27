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

async function deleteById(id: number) {
  await prisma.orderItemDetails.delete({
    where: { id },
  });
}

const itemDetailsRepository = {
  create,
  findById,
  deleteById,
};

export default itemDetailsRepository;

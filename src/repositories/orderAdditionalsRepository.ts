import { OrderItemAdditionals } from '@prisma/client';
import prisma from '../config/database';

async function create(additionalId: number, orderItemId: number) {
  const itemAdditional: OrderItemAdditionals =
    await prisma.orderItemAdditionals.create({
      data: { additionalId, orderItemId },
    });
  return itemAdditional;
}

async function findByOrderItemId(id: number) {
  const additionals: OrderItemAdditionals[] =
    await prisma.orderItemAdditionals.findMany({
      where: {
        orderItemId: id,
      },
    });
  return additionals;
}

async function deleteByOrderItemId(id: number) {
  await prisma.orderItemAdditionals.deleteMany({
    where: {
      orderItemId: id,
    },
  });
}

const orderAdditionalsRepository = {
  create,
  findByOrderItemId,
  deleteByOrderItemId,
};

export default orderAdditionalsRepository;

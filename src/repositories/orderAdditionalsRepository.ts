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

const orderAdditionalsRepository = {
  create,
  findByOrderItemId,
};

export default orderAdditionalsRepository;

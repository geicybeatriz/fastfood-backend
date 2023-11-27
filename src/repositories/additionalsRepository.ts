import { OrderItemAdditionals } from '@prisma/client';
import prisma from '../config/database';

async function create(additionalId: number, orderItemId: number) {
  const itemAdditional: OrderItemAdditionals =
    await prisma.orderItemAdditionals.create({
      data: { additionalId, orderItemId },
    });

  return itemAdditional;
}

const additionalRepository = {
  create,
};

export default additionalRepository;

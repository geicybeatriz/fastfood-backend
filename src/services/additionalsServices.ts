import { OrderItemAdditionals } from '@prisma/client';
import additionalRepository from '../repositories/additionalsRepository';

export type CreateItemAdditionals = Omit<OrderItemAdditionals, 'id'>;

async function saveOrderAdditionals(additionalId: number, orderItemId: number) {
  const additional: OrderItemAdditionals = await additionalRepository.create(
    additionalId,
    orderItemId,
  );
  return additional;
}

const orderAdditionalService = {
  saveOrderAdditionals,
};

export default orderAdditionalService;

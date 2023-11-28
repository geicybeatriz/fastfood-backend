import { Additional, OrderItemAdditionals } from '@prisma/client';
import orderAdditionalsRepository from '../repositories/orderAdditionalsRepository';
import additionalRepository from '../repositories/additionalsRepository';
import { CustomError } from '../interfaces/errorInterface';

export type CreateItemAdditionals = Omit<OrderItemAdditionals, 'id'>;

async function saveOrderAdditionals(additionalId: number, orderItemId: number) {
  const additional: OrderItemAdditionals =
    await orderAdditionalsRepository.create(additionalId, orderItemId);
  return additional;
}

async function findById(id: number) {
  const additional: Additional =
    await additionalRepository.findAdditionalById(id);
  if (!additional) {
    // eslint-disable-next-line no-throw-literal
    throw { type: 'not found', message: 'category not found' } as CustomError;
  }
  return additional;
}

const orderAdditionalService = {
  saveOrderAdditionals,
  findById,
};

export default orderAdditionalService;

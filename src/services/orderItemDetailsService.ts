import { OrderItemDetails } from '@prisma/client';
import AddProductsOrderData from '../interfaces/addProductInterface';
import itemDetailsRepository from '../repositories/orderItemDetailsRepository';
import orderAdditionalService from './additionalsServices';
import ordersService from './ordersService';

export type CreateOrderItemDetails = Omit<OrderItemDetails, 'id'>;

async function saveOrderItemDetailsData(data: CreateOrderItemDetails) {
  const newOrderItemId = await itemDetailsRepository.create(data);
  return newOrderItemId;
}

async function createOrderItemDetails(data: AddProductsOrderData) {
  const { orderId, productId, observations, quantity, additionals } = data;
  const checkOrder: number = await ordersService.checkOrderById(orderId);
  const itemDetails: number = await saveOrderItemDetailsData({
    productId,
    orderId: checkOrder,
    observations,
    quantity,
  });

  if (additionals.length > 0) {
    additionals.forEach(async item => {
      await orderAdditionalService.saveOrderAdditionals(item, itemDetails);
    });
  }
}

const orderDetailsService = {
  createOrderItemDetails,
  saveOrderItemDetailsData,
};

export default orderDetailsService;

import { Additional, OrderItemDetails, Product } from '@prisma/client';
import { ProductsList } from '../interfaces/addProductInterface';
import itemDetailsRepository from '../repositories/orderItemDetailsRepository';
import orderAdditionalService from './additionalsServices';
import productsService from './productsService';

export type CreateOrderItemDetails = Omit<OrderItemDetails, 'id'>;

async function saveOrderItemDetailsData(data: CreateOrderItemDetails) {
  const newOrderItemId = await itemDetailsRepository.create(data);
  return newOrderItemId;
}

async function createOrderItemDetails(data: ProductsList[], id: number) {
  let totalPayment: number = 0.0;
  let totalProduct: number = 0.0;
  let totalAdditional: number = 0.0;

  await Promise.all(
    data.map(async item => {
      const getProduct: Product = await productsService.findById(
        item.productId,
      );
      const itemDetails: number = await saveOrderItemDetailsData({
        productId: getProduct.id,
        orderId: id,
        observations: item.observations,
        quantity: item.quantity,
      });

      totalProduct +=
        parseFloat(getProduct.price.toFixed(2)) *
        parseFloat(item.quantity.toFixed(2));

      if (item.additionals.length > 0) {
        await Promise.all(
          item.additionals.map(async element => {
            const additional: Additional =
              await orderAdditionalService.findById(element);
            await orderAdditionalService.saveOrderAdditionals(
              element,
              itemDetails,
            );

            totalAdditional +=
              parseFloat(additional.price.toFixed(2)) *
              parseFloat(item.quantity.toFixed(2));
          }),
        );
      }
      totalPayment = totalProduct + totalAdditional;
    }),
  );
  return Number(totalPayment.toFixed(2));
}

const orderDetailsService = {
  createOrderItemDetails,
  saveOrderItemDetailsData,
};

export default orderDetailsService;

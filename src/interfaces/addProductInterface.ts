import { $Enums } from '@prisma/client';

export interface AddProductsOrderData {
  name: string;
  payment: $Enums.Payment;
  productsList: ProductsList[];
}

export interface ProductsList {
  productId: number;
  quantity: number;
  observations: string;
  additionals: number[];
}

import { Router } from 'express';
import ordersController from '../controllers/ordersController';
import schemasValidate from '../middlewares/schemasValidate';
import orderSchemas from '../schemas/orderSchemas';

const ordersRouter = Router();

ordersRouter.post(
  '/',
  schemasValidate(orderSchemas.addProductSchema),
  ordersController.addProductOrder,
);

export default ordersRouter;

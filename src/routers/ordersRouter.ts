import { Router } from 'express';
import ordersController from '../controllers/ordersController';
import schemasValidate from '../middlewares/schemasValidate';
import orderSchemas from '../schemas/orderSchemas';
import updateOrderSchema from '../schemas/updateOrderSchema';

const ordersRouter = Router();

ordersRouter
  .post('/', schemasValidate(orderSchemas), ordersController.addProductOrder)
  .get('/', ordersController.getAllOrdersExceptCancelledStatus)
  .put(
    '/:orderId',
    schemasValidate(updateOrderSchema),
    ordersController.updateOrderStatus,
  )
  .get('/status', ordersController.findOrdersByStatus);

export default ordersRouter;

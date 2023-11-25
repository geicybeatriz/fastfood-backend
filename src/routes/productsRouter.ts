import { Router } from 'express';
import productsController from 'controllers/productsController';

const productRouter = Router();

productRouter.get('/', productsController.findAll);

export default productRouter;

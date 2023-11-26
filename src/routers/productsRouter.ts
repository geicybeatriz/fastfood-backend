import { Router } from 'express';
import productsController from '../controllers/productsController';

const productsRouter = Router();

productsRouter.get('/', productsController.findAll);
productsRouter.get('/:categoryName', productsController.findByCategory);

export default productsRouter;

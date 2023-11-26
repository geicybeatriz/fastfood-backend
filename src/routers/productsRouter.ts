import { Router } from 'express';
import productsController from '../controllers/productsController';

const productsRouter = Router();

productsRouter.get('/', productsController.findAll);
productsRouter.get(
  '/category/:categoryName',
  productsController.findByCategory,
);
productsRouter.get('/search', productsController.findBySearchTerm);

export default productsRouter;

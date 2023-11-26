import { Router } from 'express';
import productsController from '../controllers/productsController';

const productsRouter = Router();

productsRouter
  .get('/', productsController.findAll)
  .get('/category/:categoryName', productsController.findByCategory)
  .get('/search', productsController.findBySearchTerm)
  .get('/product/:id', productsController.findById);

export default productsRouter;

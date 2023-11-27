import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import ordersRouter from './routers/ordersRouter';
import errorHandlerMiddleware from './middlewares/errorHadlerMiddlewares';
import productsRouter from './routers/productsRouter';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/products', productsRouter);
app.use('/orders', ordersRouter);
app.use(errorHandlerMiddleware);

export default app;

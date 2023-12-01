import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import errorHandlerMiddleware from './middlewares/errorHadlerMiddlewares';
import additionalRouter from './routers/additionalRouter';
import ordersRouter from './routers/ordersRouter';
import productsRouter from './routers/productsRouter';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/products', productsRouter);
app.use('/orders', ordersRouter);
app.use('/additionals', additionalRouter);
app.use(errorHandlerMiddleware);

export default app;

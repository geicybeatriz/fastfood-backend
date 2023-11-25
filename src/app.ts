import cors from 'cors';
import express from 'express';
import productsRouter from 'routes/productsRouter';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/products', productsRouter);

export default app;

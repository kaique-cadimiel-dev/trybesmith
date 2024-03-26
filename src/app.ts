import express from 'express';
import { productRouter, userRouter } from './routes';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', userRouter);

export default app;

import express from 'express';
import { loginRouter, productRouter, userRouter } from './routes';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/login', loginRouter);

export default app;

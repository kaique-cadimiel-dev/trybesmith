import { Request, Response } from 'express';
import { Product } from '../../types/Product';
import insertProduct from '../services/product.service';

const insertController = async (req: Request<Product>, res: Response):Promise<Response> => {
  const product = req.body;
  const { status, data } = await insertProduct(product);
  return res.status(status).json(data);
};

export default insertController;
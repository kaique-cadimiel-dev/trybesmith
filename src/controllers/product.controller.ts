import { Request, Response } from 'express';
import { productService } from '../services';

const insert = async (req: Request, res: Response):Promise<Response> => {
  const product = req.body;
  const { status, data } = await productService.insert(product);
  return res.status(status).json(data);
};

const getAll = async (_req: Request, res: Response):Promise<Response> => {
  const { status, data } = await productService.getAll();
  return res.status(status).json(data);
};

export default { insert, getAll };
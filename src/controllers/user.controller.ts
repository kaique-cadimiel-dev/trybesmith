import { Request, Response } from 'express';
import { userService } from '../services';

const getAll = async (_req: Request, res: Response):Promise<Response> => {
  const { status, data } = await userService.getAll();
  return res.status(status).json(data);
};

export default { getAll };
import { Request, Response } from 'express';
import loginService from '../services/login.service';

const login = async (req: Request, res: Response):Promise<Response> => {
  const user = req.body;
  const { status, data } = await loginService.login(user);
  return res.status(status).json(data);
};

export default { login };
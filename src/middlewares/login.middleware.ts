import { Request, Response } from 'express';

const validateFields = (req:Request, res: Response, next: () => void):Response | undefined => {
  const user = req.body;
  if (user.username === undefined || user.password === undefined) {
    return res.status(400).json({ message: '"username" and "password" are required' });
  }
  next();
};

export default validateFields;
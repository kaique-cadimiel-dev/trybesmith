import { Request, Response } from 'express';
import productSChema from '../services/validations/productSchema';
import { Product } from '../types/Product';

const mapStatus = (statusType:string) => {
  if (statusType === 'any.required') {
    return 400;
  }
  if (statusType === 'string.base') {
    return 422;
  }
  if (statusType === 'string.min') {
    return 422;
  }
  if (statusType === 'number.base') {
    return 422;
  }
  return 500;
};

const validateFields = (req:Request, res: Response, next: () => void):Response | undefined => {
  const product = req.body as Product;
  if (typeof product.userId === 'string') {
    return res.status(422).json({ message: '"userId" must be a number' });
  }
  const { error } = productSChema
    .validate({ name: product.name, price: product.price, userId: product.userId });
  if (error) {
    console.log(error.details[0]);
    return res.status(mapStatus(error.details[0].type))
      .json({ message: error.details[0].message });
  }
  next();
};

export default validateFields;
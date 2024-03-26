import { Optional } from 'sequelize';
import { GetAllProduct, InsertProduct, Product } from '../types/Product';
import ProductModel from '../database/models/product.model';

const insert = async (product: Optional<Product, 'id'>):Promise<InsertProduct> => {
  const productCreated = await ProductModel.create(product);
  return { status: 201, data: productCreated as unknown as Product };
};

const getAll = async ():Promise<GetAllProduct> => {
  const products = await ProductModel.findAll() as unknown as Product[];
  return { status: 200, data: products };
};

export default { insert, getAll };
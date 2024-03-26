import { Optional } from 'sequelize';
import { Product, ProductServer } from '../types/Product';
import ProductModel from '../database/models/product.model';

const insert = async (product: Optional<Product, 'id'>):Promise<ProductServer> => {
  const productCreated = await ProductModel.create(product);
  return { status: 201, data: productCreated as unknown as Product };
};

export default insert;
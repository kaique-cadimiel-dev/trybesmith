import { Router } from 'express';
import productController from '../controllers/product.controller';
import validateFields from '../middlewares/product.middleware';

const route = Router();

route.post('/', validateFields, productController.insert);
route.get('/', productController.getAll);

export default route;
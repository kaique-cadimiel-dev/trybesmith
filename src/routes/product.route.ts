import { Router } from 'express';
import productController from '../controllers/product.controller';

const route = Router();

route.post('/', productController.insert);
route.get('/', productController.getAll);

export default route;
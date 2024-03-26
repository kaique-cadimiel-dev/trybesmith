import { Router } from 'express';
import insertController from '../controllers/product.controller';

const route = Router();

route.post('/', insertController);

export default route;
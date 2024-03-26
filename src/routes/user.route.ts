import { Router } from 'express';
import { userController } from '../controllers';

const route = Router();

route.get('/', userController.getAll);

export default route;
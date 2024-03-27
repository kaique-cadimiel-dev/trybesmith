import { Router } from 'express';
import loginController from '../controllers/login.controller';
import validateFields from '../middlewares/login.middleware';

const route = Router();

route.post('/', validateFields, loginController.login);

export default route;
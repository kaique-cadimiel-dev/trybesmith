import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';
import { User } from '../types/Login';
import UserModel from '../database/models/user.model';

const login = async (user: User):Promise<{
  status: number; data: {
    message: string; token?: undefined;
  };
} | {
  status: number; data: {
    token: string; message?: undefined;
  };
}> => {
  const { username, password } = user;
  
  const host = await UserModel.findOne({ where: { username } });

  if (!host || !bcryptjs.compareSync(password, host.dataValues.password)) {
    return { status: 401, data: { message: 'Username or password invalid' } };
  }
  const token = jwt.sign(user, process.env.JWT_SECRET as string);
  return { status: 200, data: { token } };
};

export default { login };
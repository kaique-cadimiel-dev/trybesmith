import { Model, Optional } from 'sequelize';
import UserModel from '../database/models/user.model';
import { User } from '../types/User';
import ProductModel from '../database/models/product.model';

const formatProductIds = (users: Model<User, Optional<User, 'id'>>[]):User[] => { 
  const usersFormated = users.map((user) => {
    const { username, productIds } = user.dataValues;    
    return { username, productIds: productIds?.map((product) => product.id) };
  });
  return usersFormated as User[];
};

const getAll = async ():Promise<{ status: number; data: User[] }> => {
  const users = await UserModel.findAll({ 
    attributes: ['username'],
    include: [{ 
      model: ProductModel,
      as: 'productIds',
      attributes: ['id'] }],
  });
  // console.log('o que mokar: ', users[0]);
  
  return { status: 200, data: formatProductIds(users) };
};

export default { getAll };
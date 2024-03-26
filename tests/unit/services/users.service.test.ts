import { expect } from 'chai';
import sinon from 'sinon';
import UserModel from '../../../src/database/models/user.model';
import { userService } from '../../../src/services';
import ProductModel from '../../../src/database/models/product.model';
import { User, UserResponse } from '../../../src/types/User';

describe('UsersService', function () {
  beforeEach(function () { sinon.restore(); });
  it('Testa se a userService retorna status 201 e produtos', async () => {
    // arrange
    const users = [
      {
        username: "Hagar",
        vocation: "Guerreiro",
        level: 10,
        password: '123',
        productIds: [
          {
            id: 1,
            name: "Excalibur",
            price: "10 peças de ouro",
            userId: 1
          },
          {
            id: 2,
            name: "Espada Justiceira",
            price: "20 peças de ouro",
            userId: 1
          },
        ]
      },
      {
        username: "Eddie",
        vocation: "Guerreiro",
        level: 8,
        password: '123',
        productIds: [
          {
            id: 3,
            name: "Lira de Orfeu",
            price: "1 peça de ouro",
            userId: 2
          },
          {
            id: 4,
            name: "Armadura de Aquiles",
            price: "1 peça de ouro",
            userId: 2
          },
        ]
      },
    ];
    const userMock = UserModel.bulkBuild(users, {
      include: [{
        model: ProductModel,
        as: 'productIds',
        attributes: ['id'],
      },],
    });
    
    sinon.stub(UserModel, 'findAll').resolves(userMock);
    // act
    const {status, data} = await userService.getAll();
    // assert
    expect(status).to.be.equal(200);
    expect(data).to.deep.equal(userMock);
  })
});

import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import productControler from '../../../src/controllers';
import ProductModel from '../../../src/database/models/product.model';

chai.use(sinonChai);

describe('ProductsController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });
  it('verifica se é possível fazer uma request para controller', async () => {
    // arrange
    const product = {
      name: 'Espada',
      price: '60',
      userId: 1
    }
    req.body = product;
    // act
    const productMock = ProductModel.build({...product, id: 1}); 
    sinon.stub(ProductModel, 'create').resolves(productMock);
    await productControler.insert(req, res);
    // assert
    expect(res.status).to.have.calledWith(201);
    expect(res.json).to.have.calledWith(productMock);
  })
});

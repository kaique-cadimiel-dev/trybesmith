import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import productControler from '../../../src/controllers';
import ProductModel from '../../../src/database/models/product.model';
import productService from '../../../src/services';

chai.use(sinonChai);

describe('ProductsController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });
  it('Testa se na productController é possível criar produto', async () => {
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
  it('Testa se na productController lista produtos', async () => {
    // arrange
    const products = [
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
    const req = {} as Request;
    const res = {} as Response;
    res.status = sinon.stub().returnsThis();
    res.json = sinon.stub().returns(products);
    sinon.stub(productService, 'getAll').resolves({status: 200, data: products})
    // act
    await productControler.getAll(req, res);
    // assert
    expect(res.status).to.have.calledWith(200);
    expect(res.json).to.have.calledWith(products);
  })
});

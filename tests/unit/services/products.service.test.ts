import { expect } from 'chai';
import sinon from 'sinon';
import insert from '../../../src/services/product.service'
import ProductModel from '../../../src/database/models/product.model';

describe('ProductsService', function () {
  beforeEach(function () { sinon.restore(); });
  it('verifica se a camada service retorna status 201, com data valído', async () => {
    // arrange
    const product = {
      name: 'Espada',
      price: '60',
      userId: 1
    };
    const productMock = ProductModel.build({...product, id: 1}); 
    sinon.stub(ProductModel, 'create').resolves(productMock);
    // act
    const {status, data} = await insert(product);
    // assert
    expect(status).to.be.equal(201);
    expect(data).to.be.equal(productMock);
  })
});

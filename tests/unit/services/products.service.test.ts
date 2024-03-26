import { expect } from 'chai';
import sinon from 'sinon';
import ProductModel from '../../../src/database/models/product.model';
import productService from '../../../src/services';

describe('ProductsService', function () {
  beforeEach(function () { sinon.restore(); });
  it('Testa se a productService retorna status 201 e produto criado', async () => {
    // arrange
    const product = {
      name: 'Espada',
      price: '60',
      userId: 1
    };
    const productMock = ProductModel.build({...product, id: 1}); 
    sinon.stub(ProductModel, 'create').resolves(productMock);
    // act
    const {status, data} = await productService.insert(product);
    // assert
    expect(status).to.be.equal(201);
    expect(data).to.be.equal(productMock);
  })
  it('Testa se a ProductService retorna status 201 e produtos', async () => {
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
    const productMock = ProductModel.bulkBuild(products); 
    sinon.stub(ProductModel, 'findAll').resolves(productMock);
    // act
    const {status, data} = await productService.getAll();
    // assert
    expect(status).to.be.equal(200);
    expect(data).to.be.equal(productMock);
  })
});

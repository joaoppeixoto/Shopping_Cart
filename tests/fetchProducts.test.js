require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {

  it('Testa se fetchProducts é uma função',() => {
    expect(typeof fetchProducts).toBe('function');
  });

  it('Execute a função fetchProducts com o argumento computador e teste se fetch foi chamada', async () => {
    expect.assertions(1)
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro', () => {
    expect(fetchProducts('')).toThrow();
  });

});


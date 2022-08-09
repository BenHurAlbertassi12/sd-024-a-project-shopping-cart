require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {

  it('Teste se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function')
  });
  it('Execute a função fetchProducts com o argumento "computador" e teste se fetch foi chamada;', () => {
    expect(fetchProducts('computador').toHaveBeenCalled(fetch))
    // https://jestjs.io/pt-BR/docs/expect#tohavebeencalled
    //Exercicio 9.3 jest
  });
  it('Teste se, ao chamar a função fetchProducts com o argumento "computador", a função fetch utiliza o endpoint "https://api.mercadolibre.com/sites/MLB/search?q=computador"', () => {
    expect(fetchProducts('computador')).toEqual("https://api.mercadolibre.com/sites/MLB/search?q=computador")
  });

  // it('', () => {
  //   expect()
  // });

  // it('', () => {
  //   expect()
  // });
















});

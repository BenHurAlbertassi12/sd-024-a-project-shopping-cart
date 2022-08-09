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
    expect(fetchProducts('computador')).toHaveBeenCalledWith("https://api.mercadolibre.com/sites/MLB/search?q=computador")
  });
  //Exercicio 9.3 jest

  it('Teste se o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo', () => {
    expect(fetchProducts('computador')).toBe(computadorSearch)
  });

  it('Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: "You must provide an url".', () => {
    expect(fetchProducts(undefined)).toBe(new Error('You must provide an url'))
  });
















});

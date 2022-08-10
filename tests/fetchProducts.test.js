require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {

  it('Teste se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function')
  });

  it('Execute a função fetchProducts com o argumento "computador" e teste se fetch foi chamada;', async () => {
    await fetchProducts('arroz')
    expect(fetch).toHaveBeenCalled()
    //  expect.assertion(1)
    // https://jestjs.io/pt-BR/docs/expect#tohavebeencalled
    //Exercicio 9.3 jest
  });

  it('Teste se, ao chamar a função fetchProducts com o argumento "computador", a função fetch utiliza o endpoint "https://api.mercadolibre.com/sites/MLB/search?q=computador"', async () => {
    await fetchProducts('computador')
    await expect(fetch).toHaveBeenCalledWith("https://api.mercadolibre.com/sites/MLB/search?q=computador")
    //  expect.assertion(1)
  });
  //Exercicio 9.3 jest

  it('Teste se o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo', async () => {
    await expect(typeof fetchProducts('computador')).toEqual(typeof computadorSearch)
    //  expect.assertion(1)
  });

  it('Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: "You must provide an url".', async () => {
    try { await fetchProducts() }
    catch (error) {
      expect(error).toEqual(new Error('You must provide an url'))
      // falso positivo
    }
  });
});


// exercicio feito com ajuda do Colega Rodrigo Sakae na sala de estudos
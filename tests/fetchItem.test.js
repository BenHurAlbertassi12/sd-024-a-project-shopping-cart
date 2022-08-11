require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Teste se fetchItem é uma função;', () => {
    expect(typeof fetchItem).toBe('function')
  })

  it('Execute a função fetchItem com o argumento do item "MLB1615760527" e teste se fetch foi chamada;', async () => {
    await fetchItem('MLB1615760527')
    expect(fetch).toHaveBeenCalled()
  })

  it('Teste se, ao chamar a função fetchItem com o argumento do item "MLB1615760527", a função fetch utiliza o endpoint "https://api.mercadolibre.com/items/MLB1615760527"', async () => {
    await fetchItem('MLB1615760527')
    expect(fetch).toEqual('https://api.mercadolibre.com/items/MLB1615760527')
    // expect(fetch).toHaveBeenCalled('https://api.mercadolibre.com/items/MLB1615760527')
  })

  it('Teste se o retorno da função fetchItem com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto item que já está importado no arquivo.', async () => {
    await fetchItem('MLB1615760527')
    expect(fetch).toEqual()
  })

  // it('Teste se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: "You must provide an url".', () => {
  //   try {
  //     await fetchItem()
  //   }
  //   catch (error) {
  //     expect(error).toEqual(new Error('You must provide an url'))
  //   }
  //})
});

const fetchURL = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
// const endPoint = 'https://api.mercadolibre.com/sites/MLB/search?q=$QUERY';

// sku: é o campo id retornado pela API;
// name: é o campo title retornado pela API;
// image: é o campo thumbnail retornado pela API.

const fetchProducts = () => {
  // await
  // os dados estão devolvendo uma nova promessa 46min00seg
  fetch(fetchURL)
    .then((respostaApi) => respostaApi.json())
    .then((objetoComputador) => {
      const pCs = {
        sku: objetoComputador.reults.id,
        name: objetoComputador.results.title,
        image: objetoComputador.results.thumbnail,
      };
      console.log(pCs);
    })
    .catch((error) => error.toString());
  console.log(fetchURL);
  return fetchURL;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
window.onload = fetchProducts;

// codigo inspirado na aula 9.2 (Pokemon), tempo incial aproximado de 40min
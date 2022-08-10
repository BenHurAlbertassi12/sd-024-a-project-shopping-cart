// const fetchURL = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${computador}`;

// sku: é o campo id retornado pela API;
// name: é o campo title retornado pela API;
// image: é o campo thumbnail retornado pela API.

pausa por Hoje video 1h11min

const fetchProducts = () => {
  // await
  // os dados estão devolvendo uma nova promessa 46min00seg
  fetch(endpoint)
    .then((respostaApi) => respostaApi.json())
    .then((objetoComputador) => {
      const pCs = {
        sku: objetoComputador.results.id,
        name: objetoComputador.results.title,
        image: objetoComputador.results.thumbnail,
      };
      console.log(pCs('results'));
    })
    .catch();
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
window.onload = fetchProducts;

// codigo inspirado na aula 9.2 (Pokemon), tempo incial aproximado de 40min
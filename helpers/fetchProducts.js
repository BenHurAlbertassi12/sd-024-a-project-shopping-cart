// sku: é o campo id retornado pela API;
// name: é o campo title retornado pela API;
// image: é o campo thumbnail retornado pela API.

const fetchProducts = async (busca) => {
  // os dados estão devolvendo uma nova promessa 46min00seg
  await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${busca}`)
    .then((respostaApi) => respostaApi.json())
    .then((objetoComputador) => {
      const pCs = objetoComputador.results.map((skin) => ({
        sku: skin.id,
        name: skin.title,
        image: skin.thumbnail,
      }));
      console.log(pCs);
    })
    .catch((error) => error());
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
window.onload = fetchProducts;

// codigo inspirado na aula 9.2 (Pokemon), tempo incial aproximado de 40min
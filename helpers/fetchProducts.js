const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
const fetchProducts = () => {
  fetch(url);
  return fetch;
};
// console.log(fetchProducts('computador'));

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}

const fetchProducts = async (busca) => {
  // Var para gurdar o link com o 'sistema' de busca.
  const linqui = await `https://api.mercadolibre.com/sites/MLB/search?q=${busca}`;
  // Var buscando que vai receber o link enquanto aguarda (acho que posso chamar assim)
  const buscado = await fetch(linqui);
  // Var resultado para 'traduzir' o json
  const resultado = await buscado.json();

  return resultado;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
// window.onload = fetchProducts;

// codigo inspirado na aula 9.2 (Pokemon), tempo incial aproximado de 40min

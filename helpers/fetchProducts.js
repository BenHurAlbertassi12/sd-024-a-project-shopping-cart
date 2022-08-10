const fetchProducts = async (busca) => {
  const linqui = `https://api.mercadolibre.com/sites/MLB/search?q=${busca}`;
  const buscado = await fetch(linqui);
  const resultado = await buscado.json();
  return resultado.results;
};
fetchProducts('computador');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}

// codigo inspirado na aula 9.2 (Pokemon), tempo incial aproximado de 40min
// linha 7 Rafaell Lacorte-Turma 24 deu a dica do que fazer

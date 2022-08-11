const fetchItem = async (buscaId) => {
  // seu código aqui
  try {
    const endpoint = await fetch(`https://api.mercadolibre.com/items/${buscaId}`);
    const resultado = await endpoint.json();
    return resultado; // retirei o '.results' e passou no teste
  } catch (error) {
    throw new Error('You must provide an url');
  }
};
// fetchItem();

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}

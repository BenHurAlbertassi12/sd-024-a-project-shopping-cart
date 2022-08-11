// Implemente a função saveCartItems que deve possuir a lógica para apenas adicionar o item no localStorage em uma chave chamada cartItems;
// A função saveCartItems não deve recuperar os itens do localStorage.
const saveCartItems = (valorPassado) => {
  localStorage.setItem('cartItems', valorPassado);
  // seu código aqui
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

// Implemente a função saveCartItems que deve possuir a lógica para apenas adicionar o item no localStorage em uma chave chamada cartItems;
// A função saveCartItems não deve recuperar os itens do localStorage.
const saveCartItems = (valorPassado, price) => {
  localStorage.setItem('cartItems', valorPassado, price); // seu código aqui
};

// course aula webStorage
if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

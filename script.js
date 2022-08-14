const cartItems = document.querySelector('.cart__items');

// veio pronto
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

// veio pronto
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

// veio pronto
const createProductItemElement = ({ id: sku, title: name, thumbnail: image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

// veio pronto
const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

// adicionado ao parametro um target.remove
const cartItemClickListener = (event) => {
  event.target.remove();
};

// veio pronto
const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

// feito em mentoria
const seletcCartItems = (linha) => {
  const olLinha = document.querySelector('.cart__items');
  olLinha.appendChild(linha);
};

const loading = () => {
  const loadItems = document.querySelector('.items'); // esta pegando a classe .items dentro de index.html colocando dentro de loadItems
  const elementoP = document.createElement('p'); // Criando a tag P
  elementoP.className = 'loading'; // adicionando a parava loading como classe da tag p
  elementoP.innerText = 'carregando...'; // adicionando a palavra carregando para a tag p
  loadItems.appendChild(elementoP); // acrescentadno a tag p como filho da classe .items
};

const removeLoading = () => {
  const tagP = document.querySelector('.loading'); // pegando a classe .loading
  tagP.remove(); // remove a tag p
};

const chamadaItem = async (busacaId) => {
  const resBusca = await fetchItem(busacaId);
  const linha = createCartItemElement({
    sku: resBusca.id,
    name: resBusca.title,
    salePrice: resBusca.price,
  });
  seletcCartItems(linha);
};

const limpaCarro = () => {
  const clearCar = document.querySelector('.empty-cart'); // seleciona a classe .empty-cart
  clearCar.addEventListener('click', () => { // adicina um envento de escuta com 'click' e uma função
    cartItems.innerHTML = ''; // escreve uma string vazia a classe quando clicada
  });
};

// feita em mentoria
const chamadaEnviar = async (event) => {
  const skull = getSkuFromProductItem(event.target.parentElement);
  await chamadaItem(skull);
};

const chamadaComputador = async () => {
  loading(); // chamando a função loading
  const resBusca = await fetchProducts('computador'); // Var resBusca para receber o resultado da busca sobre o prametro 'computador'
  removeLoading();// chamando a função removeLoading
  const filhoResult = document.querySelector('.items'); // selecionando a classe .items
  resBusca.forEach((busca) => { // dois dias tentando resolver, retirei o '.results' e resolveu.// refino da busca com o forEach para pegar apenas o que foi buscado
    const acrescenta = createProductItemElement(busca);
    // console.log(acrescenta)
    acrescenta.addEventListener('click', chamadaEnviar);// Var acrescentar (append) para trazer o que foi buscado pelo que foi declarado na linha 17
    filhoResult.appendChild(acrescenta);// Acrecentando a 'criança' fillhoItem
    // teste.push(acrescenta);
    // saveCartItems(teste);
  }); // codigo resolvido em conjunto com Cris, Uriel Silva e Lorena, sala de estudos numero 10
  // duas horas na mentoria com o Bruno, o coitado esta morto de cansado de mim, sendo honesto, sem ele eu não teria conseguido, toda a parte de adicionar o item ao carrinho foi feita em mentoria, sou extremamente grato a ele.
};

window.onload = () => {
  limpaCarro();
  chamadaComputador();
  saveCartItems();
};

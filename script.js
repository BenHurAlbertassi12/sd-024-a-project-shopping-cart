const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createProductItemElement = ({ id: sku, title: name, thumbnail: image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

// Criando a chamada do fetchProducts
const chamadaComputador = async () => {
  const resBusca = await fetchProducts('computador');
  // Var resBusca para receber o resultado da busca sobre o prametro 'computador'
  const filhoResult = document.querySelector('.items');
  // selecionando a pasta .items
  resBusca.results.forEach((busca) => {
    // refino da busca com o forEach para pegar apenas o results
    const acrescenta = createProductItemElement(busca);
    // Var acrescenta (append) para trazer o que foi buscado pelo que foi declarado na linha 17
    filhoResult.appendChild(acrescenta);
    // Acrecentando a 'criança' fillhoItem
  });
};
chamadaComputador();

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;
console.log(getSkuFromProductItem);

const cartItemClickListener = (event) => {
  // coloque seu código aqui
  // requisito 5
  console.log(event);
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};
console.log(createCartItemElement);

window.onload = () => { };
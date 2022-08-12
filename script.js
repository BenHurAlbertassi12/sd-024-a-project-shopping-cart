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

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  event.target.remove();
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const novaFun = (linha) => {
  const olLinha = document.querySelector('.cart__items');
  olLinha.appendChild(linha);
};

const chamadaItem = async (busacaId) => {
  // console.log(olLinha);
  const resBusca = await fetchItem(busacaId);
  const linha = createCartItemElement({
    sku: resBusca.id,
    name: resBusca.title,
    salePrice: resBusca.price,
  });
  console.log(linha);
  novaFun(linha);
};

const chamadaEnviar = async (event) => {
  const skull = getSkuFromProductItem(event.target.parentElement);
  await chamadaItem(skull);
};
const chamadaComputador = async () => {
  const resBusca = await fetchProducts('computador');
  // Var resBusca para receber o resultado da busca sobre o prametro 'computador'
  const filhoResult = document.querySelector('.items');
  // selecionando a pasta .items
  resBusca.forEach((busca) => { // dois dias tentando resolver, retirei o '.results' e resolveu
    // refino da busca com o forEach para pegar apenas o results
    const acrescenta = createProductItemElement(busca);
    acrescenta.addEventListener('click', chamadaEnviar);
    // Var acrescenta (append) para trazer o que foi buscado pelo que foi declarado na linha 17
    filhoResult.appendChild(acrescenta);
    // Acrecentando a 'criança' fillhoItem
  });
  // codigo resolvido em conjunto com Cris, Uriel Silva e Lorena, sala de estudos numero 10
};
// duas horas na mentoria com o Bruno, o coitado esta morto de cansado de mim, sendo honesto, sem ele eu não teria conseguido, toda a parte de adicionar o item ao carrinho foi feita em mentoria, sou extremamente grato a ele.

window.onload = () => {
  chamadaComputador();
};
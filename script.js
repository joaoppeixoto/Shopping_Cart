/// const { fetchItem } = require("./helpers/fetchItem");
const getCartItem = document.querySelectorAll('.cart__item');

// const getSavedCartItems = require("./helpers/getSavedCartItems");

const getItem = document.querySelector('.items');
const getId = document.querySelector('.cart__items');
const loading = document.querySelector('.loading');
// Esse tipo de comentário que estão antes de todas as funções são chamados de JSdoc,
// experimente passar o mouse sobre o nome das funções e verá que elas possuem descrições! 

// Fique a vontade para modificar o código já escrito e criar suas próprias funções!

/**
 * Função responsável por criar e retornar o elemento de imagem do produto.
 * @param {string} imageSource - URL da imagem.
 * @returns {Element} Elemento de imagem do produto.
 */

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};
const saveLocalStorage = () => {
  let arrayCart = [];
  getCartItem.forEach((param) => arrayCart.push(param.innerText));
  saveCartItems(JSON.stringify(arrayCart));
  arrayCart = [];
};

const cartItemClickListener = (event) => {
  event.target.remove();
  saveLocalStorage();
};

const clearbtn = document.querySelector('.empty-cart');
clearbtn.addEventListener('click', () => {
const cItems = document.querySelector('.cart__items');
cItems.innerHTML = '';
saveLocalStorage();
});

/**
 * Função responsável por criar e retornar qualquer elemento.
 * @param {string} element - Nome do elemento a ser criado.
 * @param {string} className - Classe do elemento.
 * @param {string} innerText - Texto do elemento.
 * @returns {Element} Elemento criado.
 */
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

/**
 * Função responsável por criar e retornar o elemento do produto.
 * @param {Object} product - Objeto do produto. 
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.thumbnail - URL da imagem do produto.
 * @returns {Element} Elemento de produto.
 */
 const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const createCartItem = async (event) => {
  const nodeSon = event.target.parentNode;
  const firstId = nodeSon.firstChild.innerText;
  const request = await fetchItem(firstId);  

  getId.appendChild(createCartItemElement(request));
  saveLocalStorage();
  };

const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  const btnGetId = document.querySelectorAll('.item__add');
  btnGetId.forEach((btn) => btn.addEventListener('click', createCartItem));

  return section;
};

const renderCreateProduct = async () => {
  const render = await fetchProducts('computador');
  render.results.forEach((product) => {
    getItem.appendChild(createProductItemElement(product));
  });
  loading.remove();
};

/**
 * Função que recupera o ID do produto passado como parâmetro.
 * @param {Element} product - Elemento do produto.
 * @returns {string} ID do produto.
 */
// const getIdFromProductItem = (product) => product.querySelector('span.id').innerText;

/**
 * Função responsável por criar e retornar um item do carrinho.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.price - Preço do produto.
 * @returns {Element} Elemento de um item do carrinho.
 */

 const getLocalstorage = (param) => {
  param.forEach((element) => {
    const li = document.createElement('li');
    li.className = 'cart__items';
    li.innerText = element;
    li.addEventListener('click', cartItemClickListener);
    getId.appendChild(li);
  });
  };

window.onload = () => { 
  renderCreateProduct(); 
  getLocalstorage(JSON.parse(getSavedCartItems('cartItems')));
};

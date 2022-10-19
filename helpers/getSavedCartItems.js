const getSavedCartItems = () => {
  const li = document.querySelector('li');
document.querySelector('.cart__items').innerHTML = localStorage.getItem('cartItems');
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

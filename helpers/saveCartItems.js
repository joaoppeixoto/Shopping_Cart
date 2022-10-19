const saveCartItems = (param) => {
const localKey = 'cartItems';
localStorage.setItem(localKey, (param));
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
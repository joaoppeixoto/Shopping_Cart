const saveCartItems = (param) => {
const localKey = 'cartItems';
localStorage.setItem(localKey, JSON.stringify(param));
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
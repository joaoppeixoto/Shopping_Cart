const getSavedCartItems = () => JSON.parse(localStorage.getItem('cartItem'));

 console.log(getSavedCartItems());

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

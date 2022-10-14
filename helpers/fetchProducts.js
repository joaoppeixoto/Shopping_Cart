const fetchProducts = async (product) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
  const getUrl = await fetch(url);
  const promise = getUrl.json();
  return promise;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}

const fetchItem = async () => {
  const requestUrl = await fetch('https://api.mercadolibre.com/items/MLB1341706310');
  const response = await requestUrl.json();
  return response;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
fetchItem();

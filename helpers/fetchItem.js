const fetchItem = async (ItemId) => {
  const requestUrl = await fetch(`https://api.mercadolibre.com/items/${ItemId}`);
  const response = await requestUrl.json();
  return response;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
// fetchItem('MLB1341706310');
// fetchItem

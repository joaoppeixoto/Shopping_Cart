const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('Teste se, ao executar saveCartItems com um cartItem como argumento, o método localStorage.setItem é chamado', async () => {
    await (saveCartItems('cartItem'));
    expect(localStorage.setItem).toHaveBeenCalled();
  })
  it('Teste se, ao executar saveCartItems com um cartItem como argumento, o método localStorage.setItem é chamado com dois parâmetros',async () => {
    
    await saveCartItems('cartItem');
    expect(localStorage.setItem).toHaveBeenCalled();
  })
});

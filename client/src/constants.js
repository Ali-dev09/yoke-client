import cart from './scripts/cart.js'

export const backendUrl = 'https://yoke-server-production.up.railway.app'


export function updateCart() {
  const totalQuantity = cart.cartArray.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );
  console.log("updated");
  return totalQuantity;
}

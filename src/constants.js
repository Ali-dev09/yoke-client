import cart from './scripts/cart.js'

export const backendUrl = 'https://b464a1e0-dd22-46f6-8cda-c5a577dcd40c-00-2xdhy84z3o6w0.sisko.replit.dev'


export function updateCart() {
  const totalQuantity = cart.cartArray.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );
  console.log("updated");
  return totalQuantity;
}

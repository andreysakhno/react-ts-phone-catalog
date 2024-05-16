import { ProductInCartType } from '../types';

export const getCartItemWithUpdatedQuantity = (
  cart: ProductInCartType[],
  id: string,
  delta: number,
) => {
  return cart.map(cartItem => {
    if (cartItem.id === id) {
      return {
        ...cartItem,
        quantity: cartItem.quantity + delta,
      };
    }

    return cartItem;
  });
};

import { CartItemType } from './reducer'

export const CartActionTypes = {
  ADD_ITEM_TO_CART: 'ADD_COFFEE_TO_CART',
  INCREASE_CART_ITEM_AMOUNT: 'INCREASE_CART_ITEM_AMOUNT',
  DECREASE_CART_ITEM_AMOUNT: 'DECREASE_CART_ITEM_AMOUNT',
  REMOVE_CART_ITEM: 'REMOVE_CART_ITEM',
}

export function addItemToCartAction(item: CartItemType) {
  return {
    type: CartActionTypes.ADD_ITEM_TO_CART,
    payload: {
      item,
    },
  }
}

export function increaseCartItemAmountAction(itemId: string) {
  return {
    type: CartActionTypes.INCREASE_CART_ITEM_AMOUNT,
    payload: {
      itemId,
    },
  }
}

export function decreaseCartItemAmountAction(itemId: string) {
  return {
    type: CartActionTypes.DECREASE_CART_ITEM_AMOUNT,
    payload: {
      itemId,
    },
  }
}

export function removeCartItemAction(itemId: string) {
  return {
    type: CartActionTypes.REMOVE_CART_ITEM,
    payload: {
      itemId,
    },
  }
}

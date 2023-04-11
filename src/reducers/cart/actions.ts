import { CartItemType, DeliveryDataType } from './reducer'

export const CartActionTypes = {
  ADD_ITEM_TO_CART: 'ADD_COFFEE_TO_CART',
  INCREASE_CART_ITEM_AMOUNT: 'INCREASE_CART_ITEM_AMOUNT',
  DECREASE_CART_ITEM_AMOUNT: 'DECREASE_CART_ITEM_AMOUNT',
  REMOVE_CART_ITEM: 'REMOVE_CART_ITEM',
  CHANGE_CITY: 'CHANGE_CITY',
  COMPLETE_ORDER: 'COMPLETE_ORDER',
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

export function changeCityAction(city: string, state: string) {
  return {
    type: CartActionTypes.CHANGE_CITY,
    payload: {
      city,
      state,
    },
  }
}

export function completeOrderAction(deliveryData: DeliveryDataType) {
  return {
    type: CartActionTypes.COMPLETE_ORDER,
    payload: {
      deliveryData,
    },
  }
}

import { produce } from 'immer'

import { CartActionTypes } from './actions'

export interface CartItemType {
  id: string
  amount: number
}

interface CartState {
  items: CartItemType[]
  deliveryCost: number
}

export function cartReducer(state: CartState, action: any) {
  function findItemIndexById(itemId: string) {
    return state.items.findIndex((item) => {
      return item.id === itemId
    })
  }

  switch (action.type) {
    case CartActionTypes.ADD_ITEM_TO_CART: {
      const itemIndex = findItemIndexById(action.payload.item.id)

      return produce(state, (draft) => {
        if (itemIndex < 0) {
          draft.items.push(action.payload.item)
        } else {
          draft.items[itemIndex].amount += action.payload.item.amount
        }
      })
    }
    case CartActionTypes.INCREASE_CART_ITEM_AMOUNT: {
      const itemIndex = findItemIndexById(action.payload.itemId)

      return produce(state, (draft) => {
        if (itemIndex >= 0) {
          draft.items[itemIndex].amount++
        }
      })
    }
    case CartActionTypes.DECREASE_CART_ITEM_AMOUNT: {
      const itemIndex = findItemIndexById(action.payload.itemId)
      const itemAmount = state.items[itemIndex].amount

      return produce(state, (draft) => {
        if (itemIndex >= 0 && itemAmount > 1) {
          draft.items[itemIndex].amount--
        }
      })
    }
    case CartActionTypes.REMOVE_CART_ITEM: {
      const itemIndex = findItemIndexById(action.payload.itemId)

      return produce(state, (draft) => {
        if (itemIndex >= 0) {
          draft.items.splice(itemIndex, 1)
        }
      })
    }
  }

  return state
}

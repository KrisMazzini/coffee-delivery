import { createContext, ReactNode, useEffect, useReducer } from 'react'

import {
  addItemToCartAction,
  increaseCartItemAmountAction,
  decreaseCartItemAmountAction,
  removeCartItemAction,
  completeOrderAction,
} from '../reducers/cart/actions'
import {
  CartItemType,
  cartReducer,
  DeliveryDataType,
} from '../reducers/cart/reducer'

interface CartContextType {
  items: CartItemType[]
  deliveryCost: number
  deliveryData: DeliveryDataType | null
  addItemToCart: (item: CartItemType) => void
  increaseCartItemAmount: (itemId: string) => void
  decreaseCartItemAmount: (itemId: string) => void
  removeCartItem: (itemId: string) => void
  completeOrder: (deliveryData: DeliveryDataType) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      items: [],
      deliveryCost: 3.5,
      deliveryData: null,
    },
    (initialState) => {
      const storedCartStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-state:2.1.0',
      )

      if (storedCartStateAsJSON) {
        return JSON.parse(storedCartStateAsJSON)
      }

      return initialState
    },
  )

  const { items, deliveryCost, deliveryData } = cartState

  function addItemToCart(item: CartItemType) {
    dispatch(addItemToCartAction(item))
  }

  function increaseCartItemAmount(itemId: string) {
    dispatch(increaseCartItemAmountAction(itemId))
  }

  function decreaseCartItemAmount(itemId: string) {
    dispatch(decreaseCartItemAmountAction(itemId))
  }

  function removeCartItem(itemId: string) {
    dispatch(removeCartItemAction(itemId))
  }

  function completeOrder(deliveryData: DeliveryDataType) {
    dispatch(completeOrderAction(deliveryData))
  }

  useEffect(() => {
    const cartStateJSON = JSON.stringify(cartState)
    localStorage.setItem('@coffee-delivery:cart-state:2.1.0', cartStateJSON)
  }, [cartState])

  return (
    <CartContext.Provider
      value={{
        items,
        deliveryCost,
        deliveryData,
        addItemToCart,
        increaseCartItemAmount,
        decreaseCartItemAmount,
        removeCartItem,
        completeOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

import { createContext, ReactNode, useEffect, useReducer } from 'react'

import {
  addItemToCartAction,
  increaseCartItemAmountAction,
  decreaseCartItemAmountAction,
  removeCartItemAction,
} from '../reducers/cart/actions'
import { CartItemType, cartReducer } from '../reducers/cart/reducer'

interface CartContextType {
  items: CartItemType[]
  addItemToCart: (item: CartItemType) => void
  increaseCartItemAmount: (itemId: string) => void
  decreaseCartItemAmount: (itemId: string) => void
  removeCartItem: (itemId: string) => void
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
    },
    (initialState) => {
      const storedCartStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-state:1.0.0',
      )

      if (storedCartStateAsJSON) {
        return JSON.parse(storedCartStateAsJSON)
      }

      return initialState
    },
  )

  const { items } = cartState

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

  useEffect(() => {
    const cartStateJSON = JSON.stringify(cartState)
    localStorage.setItem('@coffee-delivery:cart-state:1.0.0', cartStateJSON)
  }, [cartState])

  return (
    <CartContext.Provider
      value={{
        items,
        addItemToCart,
        increaseCartItemAmount,
        decreaseCartItemAmount,
        removeCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

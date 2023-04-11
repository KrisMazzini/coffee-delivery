import { createContext, ReactNode, useEffect, useReducer } from 'react'

import {
  addItemToCartAction,
  increaseCartItemAmountAction,
  decreaseCartItemAmountAction,
  removeCartItemAction,
  completeOrderAction,
  changeCityAction,
} from '../reducers/cart/actions'
import {
  CartItemType,
  cartReducer,
  DeliveryDataType,
} from '../reducers/cart/reducer'

interface CartContextType {
  items: CartItemType[]
  deliveryCost: number
  deliveryData: DeliveryDataType
  addItemToCart: (item: CartItemType) => void
  increaseCartItemAmount: (itemId: string) => void
  decreaseCartItemAmount: (itemId: string) => void
  removeCartItem: (itemId: string) => void
  changeCity: (city: string, state: string) => void
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
      deliveryData: {
        address: {
          zipCode: '',
          street: '',
          number: '',
          complement: '',
          district: '',
          city: '',
          state: '',
        },
        payment: '',
        orderTime: null,
        deliveryTime: null,
      },
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

  function changeCity(city: string, state: string) {
    dispatch(changeCityAction(city, state))
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
        changeCity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

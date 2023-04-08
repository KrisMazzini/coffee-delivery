import { useContext } from 'react'

import {
  CoffeeList,
  ConfirmOrderButton,
  PriceSummary,
  SelectedCoffeesContainer,
  Summary,
  TotalSummary,
} from './styles'

import { formatNumberAsCurrency } from '../../../../utils/numberFormatting'
import { CoffeeListContext } from '../../../../contexts/CoffeeListContext'
import { CartContext } from '../../../../contexts/CartContext'
import { CoffeeCard } from '../CoffeeCard'

export function SelectedCoffees() {
  const { items } = useContext(CartContext)
  const { getCoffeeDataById } = useContext(CoffeeListContext)

  const selectedCoffees = items.map((item) => {
    const coffeeData = getCoffeeDataById(item.id)

    if (!coffeeData) {
      return null
    }

    return { ...coffeeData, amount: item.amount }
  })

  const totalItemsPrice = selectedCoffees.reduce((price, coffee) => {
    if (coffee) {
      return price + coffee.amount * coffee.price
    }

    return price
  }, 0)

  const deliveryPrice = 3.5

  return (
    <SelectedCoffeesContainer>
      <CoffeeList>
        {selectedCoffees.map((coffee) => {
          if (coffee) {
            return <CoffeeCard {...coffee} key={coffee.id} />
          }

          return <></>
        })}
      </CoffeeList>
      <Summary>
        <PriceSummary>
          <span>Total de itens</span>
          <span>R$ {formatNumberAsCurrency(totalItemsPrice)}</span>
        </PriceSummary>
        <PriceSummary>
          <span>Entrega</span>
          <span>R$ {formatNumberAsCurrency(deliveryPrice)}</span>
        </PriceSummary>
        <TotalSummary>
          <span>Total</span>
          <span>
            R$ {formatNumberAsCurrency(totalItemsPrice + deliveryPrice)}
          </span>
        </TotalSummary>
      </Summary>
      <ConfirmOrderButton>Confirmar Pedido</ConfirmOrderButton>
    </SelectedCoffeesContainer>
  )
}

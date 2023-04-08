import { useContext } from 'react'
import { Trash } from 'phosphor-react'

import { CoffeeCardContainer, Controls, Details, RemoveButton } from './styles'

import { formatNumberAsCurrency } from '../../../../utils/numberFormatting'
import { CoffeeType } from '../../../../contexts/CoffeeListContext'
import { CartContext } from '../../../../contexts/CartContext'
import { CoffeeAmount } from '../../../../components/CoffeeAmount'

interface CoffeeCardProps extends CoffeeType {
  amount: number
}

export function CoffeeCard({
  id,
  imageUrl,
  name,
  price,
  amount,
}: CoffeeCardProps) {
  const { increaseCartItemAmount, decreaseCartItemAmount, removeCartItem } =
    useContext(CartContext)

  function increaseAmount() {
    increaseCartItemAmount(id)
  }

  function decreaseAmount() {
    decreaseCartItemAmount(id)
  }

  function removeItem() {
    removeCartItem(id)
  }

  return (
    <CoffeeCardContainer>
      <img src={imageUrl} alt="" />
      <Details>
        <span>{name}</span>
        <span>R$ {formatNumberAsCurrency(amount * price)}</span>
      </Details>
      <Controls>
        <CoffeeAmount
          amount={amount}
          handleIncreaseAmount={increaseAmount}
          handleDecreaseAmount={decreaseAmount}
        />
        <RemoveButton type="button" onClick={removeItem}>
          <Trash size={16} />
          Remover
        </RemoveButton>
      </Controls>
    </CoffeeCardContainer>
  )
}

import { Minus, Plus, IconContext } from 'phosphor-react'
import { CoffeeAmountContainer } from './styles'

interface CoffeeAmountProps {
  amount: number
  addAmount: () => void
  removeAmount: () => void
}

export function CoffeeAmount({
  amount,
  addAmount,
  removeAmount,
}: CoffeeAmountProps) {
  const minAmount = 0
  const maxAmount = 99

  function handleRemoveAmount() {
    if (amount > minAmount) {
      removeAmount()
    }
  }

  function handleAddAmount() {
    if (amount < maxAmount) {
      addAmount()
    }
  }

  return (
    <CoffeeAmountContainer>
      <IconContext.Provider value={{ size: 14, weight: 'bold' }}>
        <Minus
          onClick={handleRemoveAmount}
          onMouseDown={(ev) => ev.preventDefault()}
        />
        <input type="number" min={0} max={99} value={amount} disabled />
        <Plus
          onClick={handleAddAmount}
          onMouseDown={(ev) => ev.preventDefault()}
        />
      </IconContext.Provider>
    </CoffeeAmountContainer>
  )
}

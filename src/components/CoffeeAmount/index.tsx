import { Minus, Plus, IconContext } from 'phosphor-react'

import { CoffeeAmountContainer } from './styles'

interface CoffeeAmountProps {
  amount: number
  handleIncreaseAmount: () => void
  handleDecreaseAmount: () => void
}

export function CoffeeAmount({
  amount,
  handleIncreaseAmount,
  handleDecreaseAmount,
}: CoffeeAmountProps) {
  return (
    <CoffeeAmountContainer>
      <IconContext.Provider value={{ size: 14, weight: 'bold' }}>
        <Minus
          onClick={handleDecreaseAmount}
          onMouseDown={(ev) => ev.preventDefault()}
        />
        <input type="number" min={0} value={amount} disabled />
        <Plus
          onClick={handleIncreaseAmount}
          onMouseDown={(ev) => ev.preventDefault()}
        />
      </IconContext.Provider>
    </CoffeeAmountContainer>
  )
}

import { Minus, Plus, IconContext } from 'phosphor-react'
import { CoffeeAmountContainer } from './styles'

export function CoffeeAmount() {
  return (
    <CoffeeAmountContainer>
      <IconContext.Provider value={{ size: 14, weight: 'bold' }}>
        <Minus />
        <input type="number" min={1} max={9} value={1} disabled />
        <Plus />
      </IconContext.Provider>
    </CoffeeAmountContainer>
  )
}

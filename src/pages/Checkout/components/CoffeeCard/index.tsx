import { Trash } from 'phosphor-react'

import expresso from '../../../../assets/expresso-tradicional.png'
import { CoffeeCardContainer, Controls, Details, RemoveButton } from './styles'

import { CoffeeAmount } from '../../../../components/CoffeeAmount'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src={expresso} alt="" />
      <Details>
        <span>Expresso Tradicional</span>
        <span>R$ 9,90</span>
      </Details>
      <Controls>
        <CoffeeAmount />
        <RemoveButton>
          <Trash size={16} />
          Remover
        </RemoveButton>
      </Controls>
    </CoffeeCardContainer>
  )
}

import { ShoppingCartSimple } from 'phosphor-react'

import {
  CoffeeCardContainer,
  CoffeeHeader,
  TagList,
  Tag,
  Description,
  AddToCartForm,
  PriceTag,
  AddToCartButton,
} from './styles'

import expresso from '../../../../assets/expresso-tradicional.png'
import { CoffeeAmount } from '../../../../components/CoffeeAmount'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <CoffeeHeader>
        <img src={expresso} alt="" />
        <TagList>
          <Tag>trandicional</Tag>
          <Tag>com leite</Tag>
          <Tag>Gelado</Tag>
        </TagList>
      </CoffeeHeader>
      <Description>
        <h4>Expresso Americano</h4>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </Description>
      <AddToCartForm>
        <PriceTag>
          R$ <strong>9,90</strong>
        </PriceTag>
        <CoffeeAmount />
        <AddToCartButton>
          <ShoppingCartSimple size={22} weight="fill" />
        </AddToCartButton>
      </AddToCartForm>
    </CoffeeCardContainer>
  )
}

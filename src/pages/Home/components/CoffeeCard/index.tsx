import { Minus, Plus, IconContext, ShoppingCartSimple } from 'phosphor-react'

import {
  CoffeeCardContainer,
  CoffeeHeader,
  TagList,
  Tag,
  Description,
  AddToCartForm,
  PriceTag,
  Amount,
  AddToCartButton,
} from './styles'

import expresso from '../../../../assets/expresso-tradicional.png'

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
        <Amount>
          <IconContext.Provider value={{ size: 14, weight: 'bold' }}>
            <Minus />
            <input type="number" min={1} max={9} value={1} disabled />
            <Plus />
          </IconContext.Provider>
        </Amount>
        <AddToCartButton>
          <ShoppingCartSimple size={22} weight="fill" />
        </AddToCartButton>
      </AddToCartForm>
    </CoffeeCardContainer>
  )
}

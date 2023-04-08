import { FormEvent, useContext, useState } from 'react'
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

import { CoffeeType } from '../../../../contexts/CoffeeListContext'
import { CartContext } from '../../../../contexts/CartContext'

import { CoffeeAmount } from '../../../../components/CoffeeAmount'
import { formatNumberAsCurrency } from '../../../../utils/numberFormatting'

export function CoffeeCard({
  id,
  imageUrl,
  name,
  description,
  tags,
  price,
}: CoffeeType) {
  const [amount, setAmount] = useState(0)
  const { addItemToCart } = useContext(CartContext)

  function increaseAmount() {
    setAmount((prevAmount) => prevAmount + 1)
  }

  function decreaseAmount() {
    if (amount > 0) {
      setAmount((prevAmount) => prevAmount - 1)
    }
  }

  function handleAddItemToCart(event: FormEvent) {
    event.preventDefault()

    addItemToCart({
      id,
      amount,
    })

    setAmount(0)
  }

  return (
    <CoffeeCardContainer>
      <CoffeeHeader>
        <img src={imageUrl} alt="" />
        <TagList>
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagList>
      </CoffeeHeader>
      <Description>
        <h4>{name}</h4>
        <p>{description}</p>
      </Description>
      <AddToCartForm onSubmit={handleAddItemToCart}>
        <PriceTag>
          R$ <strong>{formatNumberAsCurrency(price)}</strong>
        </PriceTag>
        <CoffeeAmount
          amount={amount}
          handleIncreaseAmount={increaseAmount}
          handleDecreaseAmount={decreaseAmount}
        />
        <AddToCartButton type="submit" disabled={amount < 1}>
          <ShoppingCartSimple size={22} weight="fill" />
        </AddToCartButton>
      </AddToCartForm>
    </CoffeeCardContainer>
  )
}

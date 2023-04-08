import { NavLink } from 'react-router-dom'
import { CaretCircleLeft, ShoppingCart } from 'phosphor-react'
import { useTheme } from 'styled-components'

import { EmptyCartContainer } from './styles'

export function EmptyCart() {
  const theme = useTheme()

  return (
    <EmptyCartContainer>
      <ShoppingCart size={256} color={theme.purple} />
      <p>
        <strong>Seu carrinho está vazio!</strong> <br /> Selecione seus cafés
        preferidos para prosseguir com seu pedido!
      </p>
      <NavLink to="/">
        Voltar <CaretCircleLeft size={32} color={theme.white} />
      </NavLink>
    </EmptyCartContainer>
  )
}

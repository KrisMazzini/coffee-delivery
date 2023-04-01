import { NavLink } from 'react-router-dom'
import { useTheme } from 'styled-components'
import { ShoppingCart } from 'phosphor-react'

import logo from '../../assets/logo-coffee-delivery.svg'
import { CartWrapper, HeaderContainer } from './styles'

import { CitySelector } from '../CitySelector'

export function Header() {
  const theme = useTheme()

  return (
    <HeaderContainer>
      <NavLink to="/" title="Home" end>
        <img src={logo} alt="" />
      </NavLink>
      <CitySelector />
      <NavLink to="/checkout" title="Checkout">
        <CartWrapper>
          <ShoppingCart size={22} weight="fill" color={theme['yellow-dark']} />
        </CartWrapper>
      </NavLink>
    </HeaderContainer>
  )
}

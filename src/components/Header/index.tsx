import { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useTheme } from 'styled-components'
import { ShoppingCart } from 'phosphor-react'

import logo from '../../assets/logo-coffee-delivery.svg'
import {
  HeaderContainer,
  CartWrapper,
  CartItemsIndicator,
  LogoWrapper,
} from './styles'

import { CartContext } from '../../contexts/CartContext'
import { CitySelector } from '../CitySelector'

export function Header() {
  const [pageScrolled, setPageScrolled] = useState(false)
  const { items } = useContext(CartContext)
  const theme = useTheme()

  const itemsAmount = items.reduce((total, item) => total + item.amount, 0)

  useEffect(() => {
    function handlePageScroll() {
      setPageScrolled(window.scrollY > 0)
    }

    handlePageScroll()
    window.addEventListener('scroll', handlePageScroll)

    return () => window.removeEventListener('scroll', handlePageScroll)
  }, [])

  return (
    <HeaderContainer pageScrolled={pageScrolled}>
      <NavLink to="/" title="Home" end>
        <LogoWrapper>
          <img src={logo} alt="" />
        </LogoWrapper>
      </NavLink>
      <CitySelector />
      <NavLink to="/checkout" title="Checkout">
        <CartWrapper>
          {itemsAmount > 0 ? (
            <CartItemsIndicator>
              {itemsAmount < 100 ? itemsAmount : '99+'}
            </CartItemsIndicator>
          ) : (
            <></>
          )}
          <ShoppingCart size={22} weight="fill" color={theme['yellow-dark']} />
        </CartWrapper>
      </NavLink>
    </HeaderContainer>
  )
}

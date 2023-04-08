import { useContext } from 'react'
import { CheckoutContainer, CheckoutSection } from './styles'

import { CartContext } from '../../contexts/CartContext'
import { AddressForm } from './components/AddressForm'
import { PaymentForm } from './components/PaymentForm'
import { SelectedCoffees } from './components/SelectedCoffees'
import { EmptyCart } from './components/EmptyCart'

export function Checkout() {
  const { items } = useContext(CartContext)

  return items.length > 0 ? (
    <CheckoutContainer>
      <CheckoutSection>
        <h2>Complete seu pedido</h2>
        <AddressForm />
        <PaymentForm />
      </CheckoutSection>
      <CheckoutSection>
        <h2>Cafés selecionados</h2>
        <SelectedCoffees />
      </CheckoutSection>
    </CheckoutContainer>
  ) : (
    <EmptyCart />
  )
}

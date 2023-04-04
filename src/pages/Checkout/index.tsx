import { CheckoutContainer, CheckoutSection } from './styles'

import { AddressForm } from './components/AddressForm'
import { PaymentForm } from './components/PaymentForm'
import { SelectedCoffees } from './components/SelectedCoffees'

export function Checkout() {
  return (
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
  )
}

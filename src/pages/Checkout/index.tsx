import { CheckoutContainer } from './styles'

import { AddressForm } from './components/AddressForm'
import { PaymentForm } from './components/PaymentForm'
import { SelectedCoffees } from './components/SelectedCoffees'

export function Checkout() {
  return (
    <CheckoutContainer>
      <AddressForm />
      <PaymentForm />
      <SelectedCoffees />
    </CheckoutContainer>
  )
}

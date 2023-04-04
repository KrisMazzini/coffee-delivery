import { CheckoutContainer } from './styles'

import { AddressForm } from './components/AddressForm'
import { PaymentForm } from './components/PaymentForm'

export function Checkout() {
  return (
    <CheckoutContainer>
      <AddressForm />
      <PaymentForm />
    </CheckoutContainer>
  )
}

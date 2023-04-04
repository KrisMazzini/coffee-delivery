import deliveryIllustration from '../../assets/delivery-illustration.svg'
import { SuccessContainer, Header } from './styles'

import { DeliveryDetails } from './components/DeliveryDetails'

export function Success() {
  return (
    <SuccessContainer>
      <Header>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </Header>
      <DeliveryDetails />
      <img src={deliveryIllustration} alt="" />
    </SuccessContainer>
  )
}

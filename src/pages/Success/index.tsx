import { useContext } from 'react'

import deliveryIllustration from '../../assets/delivery-illustration.svg'
import { SuccessContainer, Header } from './styles'

import { CartContext } from '../../contexts/CartContext'
import { DeliveryDetails } from './components/DeliveryDetails'

export function Success() {
  const { deliveryData } = useContext(CartContext)

  return deliveryData.orderTime && deliveryData.deliveryTime ? (
    <SuccessContainer>
      <Header>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </Header>
      <DeliveryDetails
        {...deliveryData.address}
        paymentMethod={deliveryData.paymentMethod}
      />
      <img src={deliveryIllustration} alt="" />
    </SuccessContainer>
  ) : (
    <Header>
      <h2>Ooops! Parece que você não tem nenhum pedido em andamento!</h2>
      <p>
        Acesse nossa página principal para selecionar seus cafés preferidos!
      </p>
    </Header>
  )
}

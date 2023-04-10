import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { DeliveryDetailsContainer, Detail } from './styles'

import { IconCircle } from '../../../../components/IconCircle'
import { AddressType } from '../../../../reducers/cart/reducer'

interface DeliveryDetailsProps extends AddressType {
  paymentMethod: string
}

export function DeliveryDetails({
  street,
  number,
  district,
  city,
  state,
  paymentMethod,
}: DeliveryDetailsProps) {
  return (
    <DeliveryDetailsContainer>
      <ul>
        <Detail>
          <IconCircle icon={<MapPin />} />
          <span>
            Entrega em{' '}
            <strong>
              {street}, {number}
            </strong>
            <br />
            {district} - {city}, {state}
          </span>
        </Detail>
        <Detail>
          <IconCircle icon={<Timer />} bgColor="yellow" />
          <span>
            Previsão de entrega
            <br />
            <strong>20 min - 30 min</strong>
          </span>
        </Detail>
        <Detail>
          <IconCircle icon={<CurrencyDollar />} bgColor="yellow-dark" />
          <span>
            Pagamento na entrega
            <br />
            <strong>{paymentMethod}</strong>
          </span>
        </Detail>
      </ul>
    </DeliveryDetailsContainer>
  )
}

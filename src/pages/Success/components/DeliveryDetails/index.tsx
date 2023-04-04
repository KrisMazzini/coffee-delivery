import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { IconCircle } from '../../../../components/IconCircle'
import { DeliveryDetailsContainer, Detail } from './styles'

export function DeliveryDetails() {
  return (
    <DeliveryDetailsContainer>
      <ul>
        <Detail>
          <IconCircle icon={<MapPin />} />
          <span>
            Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
            <br />
            Farrapos - Porto Alegre, RS
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
            <strong>Cartão de Crédito</strong>
          </span>
        </Detail>
      </ul>
    </DeliveryDetailsContainer>
  )
}

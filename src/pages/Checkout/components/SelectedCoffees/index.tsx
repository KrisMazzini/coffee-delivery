import { CoffeeCard } from '../CoffeeCard'
import {
  ConfirmOrderButton,
  PriceSummary,
  SelectedCoffeesContainer,
  Summary,
  TotalSummary,
} from './styles'

export function SelectedCoffees() {
  return (
    <SelectedCoffeesContainer>
      <CoffeeCard />
      <CoffeeCard />
      <Summary>
        <PriceSummary>
          <span>Total de itens</span>
          <span>R$ 19,80</span>
        </PriceSummary>
        <PriceSummary>
          <span>Entrega</span>
          <span>R$ 3,50</span>
        </PriceSummary>
        <TotalSummary>
          <span>Total</span>
          <span>R$ 23,30</span>
        </TotalSummary>
      </Summary>
      <ConfirmOrderButton>Confirmar Pedido</ConfirmOrderButton>
    </SelectedCoffeesContainer>
  )
}

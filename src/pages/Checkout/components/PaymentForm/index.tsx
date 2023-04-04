import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useTheme } from 'styled-components'

import { PaymentFormContainer } from './styles'
import { FormCard } from '../FormCard'
import { RadioBox } from '../../../../components/RadioBox'

export function PaymentForm() {
  const theme = useTheme()

  return (
    <FormCard
      icon={<CurrencyDollar color={theme.purple} />}
      label="Pagamento"
      description="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
    >
      <PaymentFormContainer>
        <RadioBox
          icon={<CreditCard />}
          id="credit-card"
          name="payment"
          title="Cartão de crédito"
        />
        <RadioBox
          icon={<Bank />}
          id="debit-card"
          name="payment"
          title="Cartão de débito"
        />
        <RadioBox icon={<Money />} id="cash" name="payment" title="Dinheiro" />
      </PaymentFormContainer>
    </FormCard>
  )
}

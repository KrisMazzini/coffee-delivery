import { ReactNode, useState } from 'react'
import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useTheme } from 'styled-components'

import { PaymentFormContainer } from './styles'
import { FormCard } from '../FormCard'
import { RadioBox } from '../../../../components/RadioBox'

interface PaymentOptionType {
  icon: ReactNode
  id: string
  title: string
}

export function PaymentForm() {
  const [selectedPaymentOptionId, setSelectedPaymentOptionId] = useState<
    string | null
  >(null)
  const theme = useTheme()

  const paymentOptions: PaymentOptionType[] = [
    {
      icon: <CreditCard />,
      id: 'credit-card',
      title: 'Cartão de crédito',
    },
    {
      icon: <Bank />,
      id: 'debit-card',
      title: 'Cartão de débito',
    },
    {
      icon: <Money />,
      id: 'cash',
      title: 'Dinheiro',
    },
  ]

  return (
    <FormCard
      icon={<CurrencyDollar color={theme.purple} />}
      label="Pagamento"
      description="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
    >
      <PaymentFormContainer>
        {paymentOptions.map((option) => {
          return (
            <RadioBox
              {...option}
              name="payment"
              key={option.id}
              checked={option.id === selectedPaymentOptionId}
              handleSelectOption={() => setSelectedPaymentOptionId(option.id)}
            />
          )
        })}
      </PaymentFormContainer>
    </FormCard>
  )
}

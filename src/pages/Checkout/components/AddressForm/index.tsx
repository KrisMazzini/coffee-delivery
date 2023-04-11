import { useContext, useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import { MapPinLine } from 'phosphor-react'
import { useTheme } from 'styled-components'

import { AddressFormContainer, AddressRow } from './styles'

import { CartContext } from '../../../../contexts/CartContext'
import { FormCard } from '../FormCard'
import { Input } from '../../../../components/Input'

export function AddressForm() {
  const theme = useTheme()
  const { setValue } = useFormContext()
  const {
    deliveryData: { address },
  } = useContext(CartContext)

  useEffect(() => {
    const { city, state } = address

    setValue('city', city)
    setValue('state', state)
  }, [address, setValue])

  const icon = <MapPinLine size={22} color={theme['yellow-dark']} />

  return (
    <FormCard
      icon={icon}
      label="Endereço de Entrega"
      description="Informe o endereço onde deseja receber seu pedido"
    >
      <AddressFormContainer>
        <AddressRow>
          <Input
            id="zipCode"
            name="zipCode"
            placeholder="CEP"
            minLength={8}
            maxLength={8}
            required
          />
        </AddressRow>
        <AddressRow>
          <Input
            id="street"
            name="street"
            placeholder="rua"
            containerSize="md"
            grow
            required
          />
        </AddressRow>
        <AddressRow>
          <Input
            id="number"
            name="number"
            placeholder="número"
            min={0}
            required
          />
          <Input
            id="complement"
            name="complement"
            placeholder="complemento"
            grow
          />
        </AddressRow>
        <AddressRow>
          <Input id="district" name="district" placeholder="bairro" required />
          <Input
            id="city"
            name="city"
            placeholder="cidade"
            grow
            required
            disabled
          />
          <Input
            id="state"
            name="state"
            placeholder="UF"
            containerSize="sm"
            minLength={2}
            maxLength={2}
            required
            disabled
          />
        </AddressRow>
      </AddressFormContainer>
    </FormCard>
  )
}

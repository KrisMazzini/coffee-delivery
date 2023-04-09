import { MapPinLine } from 'phosphor-react'
import { useTheme } from 'styled-components'

import { AddressFormContainer, AddressRow } from './styles'

import { FormCard } from '../FormCard'
import { Input } from '../../../../components/Input'

export function AddressForm() {
  const theme = useTheme()
  const icon = <MapPinLine size={22} color={theme['yellow-dark']} />
  return (
    <FormCard
      icon={icon}
      label="Endereço de Entrega"
      description="Informe o endereço onde deseja receber seu pedido"
    >
      <AddressFormContainer>
        <AddressRow>
          <Input id="zipCode" name="zipCode" placeholder="CEP" required />
        </AddressRow>
        <AddressRow>
          <Input
            id="street"
            name="street"
            placeholder="rua"
            containerSize="md"
            fill
            required
          />
        </AddressRow>
        <AddressRow>
          <Input
            id="number"
            name="number"
            type="number"
            placeholder="número"
            min={0}
            required
          />
          <Input
            id="complement"
            name="complement"
            placeholder="complemento"
            fill
          />
        </AddressRow>
        <AddressRow>
          <Input id="district" name="district" placeholder="bairro" required />
          <Input id="city" name="city" placeholder="cidade" fill required />
          <Input
            id="state"
            name="state"
            placeholder="UF"
            containerSize="sm"
            minLength={2}
            maxLength={2}
            required
          />
        </AddressRow>
      </AddressFormContainer>
    </FormCard>
  )
}

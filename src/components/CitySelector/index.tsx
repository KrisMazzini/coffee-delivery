import { useTheme } from 'styled-components'
import { MapPin } from 'phosphor-react'

import { CitySelectorContainer } from './styles'

export function CitySelector() {
  const theme = useTheme()

  return (
    <CitySelectorContainer>
      <MapPin size={22} weight="fill" color={theme.purple} />
      <span>Porto Alegre, RS</span>
    </CitySelectorContainer>
  )
}

import { ReactNode } from 'react'
import { IconContext } from 'phosphor-react'
import { useTheme } from 'styled-components'

import { IconCircleContainer, BgColorType } from './styles'

export interface IconCircleProps {
  icon: ReactNode
  bgColor?: BgColorType
}

export function IconCircle({ icon, bgColor = 'purple' }: IconCircleProps) {
  const theme = useTheme()

  return (
    <IconCircleContainer bgColor={bgColor}>
      <IconContext.Provider
        value={{ size: 16, weight: 'fill', color: theme.white }}
      >
        {icon}
      </IconContext.Provider>
    </IconCircleContainer>
  )
}

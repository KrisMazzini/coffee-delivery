import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import { useTheme } from 'styled-components'

import { BenefitItemContainer, IconWrapper, BgColorType } from './styles'

const ICONS = {
  cart: ShoppingCart,
  package: Package,
  timer: Timer,
  coffee: Coffee,
} as const

interface BenefitItemProps {
  icon: keyof typeof ICONS
  description: string
  bgColor?: BgColorType
}

export function BenefitItem({
  icon,
  description,
  bgColor = 'purple',
}: BenefitItemProps) {
  const theme = useTheme()
  const Icon = ICONS[icon]

  return (
    <BenefitItemContainer>
      <IconWrapper bgColor={bgColor}>
        <Icon size={16} weight="fill" color={theme.white} />
      </IconWrapper>
      <span>{description}</span>
    </BenefitItemContainer>
  )
}

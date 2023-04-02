import styled from 'styled-components'

const BG_COLORS = {
  'yellow-dark': 'yellow-dark',
  yellow: 'yellow',
  gray: 'base-text',
  purple: 'purple',
} as const

export type BgColorType = keyof typeof BG_COLORS

interface IconWrapperProps {
  bgColor: BgColorType
}

export const BenefitItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  color: ${(props) => props.theme['base-text']};
`

export const IconWrapper = styled.div<IconWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.8rem;
  border-radius: 50%;

  background-color: ${(props) => props.theme[BG_COLORS[props.bgColor]]};
`

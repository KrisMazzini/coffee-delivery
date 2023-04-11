import styled from 'styled-components'

const BG_COLORS = {
  'yellow-dark': 'yellow-dark',
  yellow: 'yellow',
  gray: 'base-text',
  purple: 'purple',
} as const

export type BgColorType = keyof typeof BG_COLORS

interface IconCircleContainerProps {
  bgColor: BgColorType
}

export const IconCircleContainer = styled.div<IconCircleContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.8rem;
  border-radius: 50%;

  background-color: ${(props) => props.theme[BG_COLORS[props.bgColor]]};

  transition: transform 150ms linear;
  &:hover {
    transform: scale(1.3);
  }
`

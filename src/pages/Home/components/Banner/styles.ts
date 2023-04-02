import styled from 'styled-components'
import background from '../../../../assets/banner-background.png'

export const BannerContainer = styled.header`
  padding: 9.4rem 0 10.8rem;

  display: grid;
  grid-template-areas: 'title image' 'benefits image';
  gap: 0 5.6rem;

  position: relative;

  img {
    grid-area: image;
  }

  ::before {
    content: '';
    height: 100%;
    left: -16rem;
    right: -16rem;

    position: absolute;

    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
  }
`

export const TitleWrapper = styled.div`
  grid-area: title;

  h1 {
    font-weight: 800;
    font-size: 4.8rem;
    color: ${(props) => props.theme['base-title']};
  }

  p {
    margin-top: 1.6rem;

    font-size: 2rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const BenefitsWrapper = styled.div`
  grid-area: benefits;
  display: grid;
  grid-template-columns: repeat(2, max-content);
  gap: 2rem 4rem;
`

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

export const BenefitItem = styled.div`
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

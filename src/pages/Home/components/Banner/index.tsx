import { ReactNode } from 'react'
import { useTheme } from 'styled-components'
import {
  ShoppingCart,
  Package,
  Timer,
  Coffee,
  IconContext,
} from 'phosphor-react'

import coffeeBanner from '../../../../assets/banner-coffee.svg'

import {
  BannerContainer,
  BenefitItem,
  BenefitsWrapper,
  BgColorType,
  IconWrapper,
  TitleWrapper,
} from './styles'

interface BenefitType {
  icon: ReactNode
  description: string
  bgColor: BgColorType
}

export function Banner() {
  const theme = useTheme()

  const benefits: BenefitType[] = [
    {
      icon: <ShoppingCart />,
      description: 'Compra simples e segura',
      bgColor: 'yellow-dark',
    },
    {
      icon: <Package />,
      description: 'Embalagem mantém o café intacto',
      bgColor: 'gray',
    },
    {
      icon: <Timer />,
      description: 'Entrega rápida e rastreada',
      bgColor: 'yellow',
    },
    {
      icon: <Coffee />,
      description: 'O café chega fresquinho até você',
      bgColor: 'purple',
    },
  ]

  return (
    <BannerContainer>
      <TitleWrapper>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
      </TitleWrapper>
      <BenefitsWrapper>
        <IconContext.Provider
          value={{ size: 16, weight: 'fill', color: theme.white }}
        >
          {benefits.map((benefit) => {
            return (
              <BenefitItem key={benefit.description}>
                <IconWrapper bgColor={benefit.bgColor}>
                  {benefit.icon}
                </IconWrapper>
                <span>{benefit.description}</span>
              </BenefitItem>
            )
          })}
        </IconContext.Provider>
      </BenefitsWrapper>
      <img src={coffeeBanner} alt="" />
    </BannerContainer>
  )
}

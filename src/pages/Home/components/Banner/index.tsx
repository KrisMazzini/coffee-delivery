import { ReactNode } from 'react'
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

import coffeeBanner from '../../../../assets/banner-coffee.svg'

import {
  BannerContainer,
  BenefitItem,
  BenefitsWrapper,
  TitleWrapper,
} from './styles'

import { IconCircle } from '../../../../components/IconCircle'
import { BgColorType } from '../../../../components/IconCircle/styles'

interface BenefitType {
  icon: ReactNode
  description: string
  bgColor: BgColorType
}

export function Banner() {
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
        {benefits.map((benefit) => {
          return (
            <BenefitItem key={benefit.description}>
              <IconCircle icon={benefit.icon} bgColor={benefit.bgColor} />
              <span>{benefit.description}</span>
            </BenefitItem>
          )
        })}
      </BenefitsWrapper>
      <img src={coffeeBanner} alt="" />
    </BannerContainer>
  )
}

import coffeeBanner from '../../../../assets/banner-coffee.svg'
import { BannerContainer, BenefitsWrapper, TitleWrapper } from './styles'

import { BenefitItem } from '../BenefitItem'

export function Banner() {
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
        <BenefitItem
          icon="cart"
          description="Compra simples e segura"
          bgColor="yellow-dark"
        />
        <BenefitItem
          icon="package"
          description="Embalagem mantém o café intacto"
          bgColor="gray"
        />
        <BenefitItem
          icon="timer"
          description="Entrega rápida e rastreada"
          bgColor="yellow"
        />
        <BenefitItem
          icon="coffee"
          description="O café chega fresquinho até você"
        />
      </BenefitsWrapper>
      <img src={coffeeBanner} alt="" />
    </BannerContainer>
  )
}

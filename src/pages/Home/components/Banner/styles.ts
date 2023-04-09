import styled from 'styled-components'
import background from '../../../../assets/banner-background.png'

export const BannerContainer = styled.header`
  padding: 2.4rem 0 2.8rem;

  display: grid;
  grid-template-areas: 'title' 'benefits';
  gap: 0 5.6rem;

  position: relative;

  img {
    display: none;
  }

  ::before {
    content: '';
    height: 100%;
    width: 100vw;
    left: calc(-50vw + 50%);

    position: absolute;
    z-index: -1;

    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
  }

  @media (min-width: 768px) {
    padding: 2.4rem 0 10.8rem;
  }

  @media (min-width: 1440px) {
    padding: 9.4rem 0 10.8rem;

    grid-template-areas: 'title image' 'benefits image';

    img {
      grid-area: image;
      display: initial;
    }
  }
`

export const TitleWrapper = styled.div`
  max-width: 58.8rem;
  grid-area: title;

  h1 {
    font-weight: 800;
    font-size: 3.6rem;
    color: ${(props) => props.theme['base-title']};
  }

  p {
    margin-top: 1.6rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 4.8rem;
    }

    p {
      font-size: 2rem;
    }
  }
`

export const BenefitsWrapper = styled.ul`
  margin-top: 1.6rem;

  grid-area: benefits;
  display: flex;
  flex-direction: column;
  gap: 2rem 4rem;

  > * {
    transition: margin 300ms ease-in-out;
  }

  @media (min-width: 512px) {
    > :nth-child(2) {
      margin-left: 4rem;
    }

    > :nth-child(3) {
      margin-left: 8rem;
    }

    > :last-child {
      margin-left: 12rem;
    }
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: max-content;
    grid-template-columns: repeat(2, max-content);

    > :not(:first-child) {
      margin-left: 0;
    }
  }

  @media (min-width: 1440px) {
    margin-top: 0;
  }
`

export const BenefitItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  color: ${(props) => props.theme['base-text']};
`

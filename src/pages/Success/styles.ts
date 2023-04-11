import styled, { keyframes } from 'styled-components'

const slideImageIn = keyframes`
  from {
    transform: translateX(-100vw);
  }
  
  to {
    transform: translateX(-50%) scale(1.2);
  }
`

const finishImageSlide = keyframes`
  to {
    transform: translateX(0) scale(1);
  }
`

const fadeHeaderIn = keyframes`
  from {
    opacity: 0;
    /* transform: rotateX(90deg); */
  }
`

export const SuccessContainer = styled.main`
  max-width: 144rem;
  margin: 0 auto;

  display: grid;
  grid-template-areas: 'header' 'details' 'illustration';
  grid-auto-columns: 1fr;
  justify-content: space-between;
  align-items: center;
  gap: 2.8rem;

  img {
    width: 100%;
    max-width: 49.2rem;
    margin: 0 auto;
    animation: ${slideImageIn} 1.2s ease-in-out both,
      ${finishImageSlide} 0.5s ease-in-out 1.4s both;

    transform: translateX(-50%);
  }

  @media (min-width: 1144px) {
    grid-template-areas: 'header header' 'details illustration';
  }
`

export const Header = styled.header`
  grid-area: header;

  animation: ${fadeHeaderIn} 0.5s ease-in-out 2s both;

  h2 {
    margin-bottom: 0.4rem;

    font-weight: 800;
    font-size: 3.2rem;
    color: ${(props) => props.theme['yellow-dark']};
  }

  p {
    font-size: 2rem;
    font-stretch: 100;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

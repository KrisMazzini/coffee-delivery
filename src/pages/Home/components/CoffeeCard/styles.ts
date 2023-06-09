import styled, { keyframes } from 'styled-components'

const slideCardUp = keyframes`
  from {
    transform: translateY(5rem);
  }

  to {
    transform: translateY(0);
  }
`

interface CoffeeCardContainerProps {
  isVisible: boolean
}

export const CoffeeCardContainer = styled.div<CoffeeCardContainerProps>`
  width: 25.6rem;
  min-height: 31rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;

  opacity: ${(props) => (props.isVisible ? 1 : 0)};

  transition: opacity 300ms ease-in-out;
  animation: ${(props) => (props.isVisible ? slideCardUp : '')} 300ms
    ease-in-out both;

  padding: 0 2rem 2rem;
  border-radius: 6px 36px 6px 36px;

  background-color: ${(props) => props.theme['base-card']};

  img {
    transition: transform 200ms linear;
  }

  &:hover {
    img {
      transform: scale(1.2) rotate(45deg);
    }
  }
`

export const CoffeeHeader = styled.div`
  margin-top: -2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
`

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
`

export const Tag = styled.span`
  padding: 0.4rem 0.8rem;
  border-radius: 100px;

  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;

  color: ${(props) => props.theme['yellow-dark']};
  background-color: ${(props) => props.theme['yellow-light']};
`

export const Description = styled.div`
  text-align: center;

  h4 {
    margin-bottom: 0.8rem;

    font-weight: 700;
    font-size: 2rem;

    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-size: 1.4rem;
    color: ${(props) => props.theme['base-label']};
  }
`

export const AddToCartForm = styled.form`
  width: 100%;
  height: 3.8rem;

  margin-top: auto;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.8rem;
`

export const PriceTag = styled.span`
  margin-right: auto;

  font-size: 1.4rem;
  color: ${(props) => props.theme['base-text']};

  strong {
    font-weight: 800;
    font-size: 2.4rem;
  }
`

export const AddToCartButton = styled.button`
  width: 3.8rem;
  height: 3.8rem;

  outline: none;
  border: none;

  padding: 0.8rem;
  border-radius: 6px;

  background-color: ${(props) => props.theme['purple-dark']};

  cursor: pointer;
  transition: all 150ms linear;

  svg {
    color: ${(props) => props.theme.white};
  }

  &:disabled {
    background-color: ${(props) => props.theme['purple-light']};
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: ${(props) => props.theme.purple};
  }
`

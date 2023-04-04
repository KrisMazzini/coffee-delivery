import styled from 'styled-components'

export const CoffeeAmountContainer = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;

  padding: 0.8rem;
  border-radius: 6px;

  background-color: ${(props) => props.theme['base-button']};

  input {
    all: unset;
    width: 2rem;
    background-color: inherit;
    text-align: center;

    color: ${(props) => props.theme['base-title']};
  }

  svg {
    cursor: pointer;
    color: ${(props) => props.theme.purple};

    transition: all 100ms linear;

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`

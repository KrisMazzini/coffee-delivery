import styled from 'styled-components'

export const EmptyCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;

  color: ${(props) => props.theme['base-text']};

  transition: all 150ms ease-in-out;

  * {
    transition: inherit;
  }

  > svg {
    width: 12.8rem;
    height: 12.8rem;
  }

  p {
    text-align: center;

    strong {
      font-size: 2.4rem;
      font-weight: 700;
    }
  }

  a {
    padding: 0.8rem 3.2rem;
    border-radius: 6px;

    display: flex;
    align-items: center;
    gap: 0.8rem;

    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.purple};

    transition: all 150ms ease-in-out;

    svg {
      width: 1.6rem;
      height: 1.6rem;
    }

    &:hover {
      background-color: ${(props) => props.theme['purple-dark']};
    }
  }

  @media (min-width: 768px) {
    > svg {
      width: 25.6rem;
      height: 25.6rem;
    }

    p {
      font-size: 2.4rem;

      strong {
        font-size: 3.6rem;
      }
    }

    a {
      padding: 0.8rem 6.4rem;
      font-size: 2.4rem;

      svg {
        width: 3.2rem;
        height: 3.2rem;
      }
    }
  }
`

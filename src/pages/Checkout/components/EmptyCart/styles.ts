import styled from 'styled-components'

export const EmptyCartContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;

  color: ${(props) => props.theme['base-text']};

  p {
    font-size: 2.4rem;
    text-align: center;

    strong {
      font-size: 3.6rem;
      font-weight: 700;
    }
  }

  a {
    padding: 0.8rem 6.4rem;
    border-radius: 6px;

    display: flex;
    align-items: center;
    gap: 0.8rem;

    font-size: 2.4rem;

    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.purple};

    transition: all 150ms ease-in-out;

    &:hover {
      background-color: ${(props) => props.theme['purple-dark']};
    }
  }
`

export const IconWrapper = styled.div`
  padding: 5rem;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme['purple-light']};
`

import styled from 'styled-components'

export const CitySelectorContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;

  padding: 0.8rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['purple-light']};

  cursor: pointer;

  span {
    font-weight: 400;
    font-size: 1.4rem;
    color: ${(props) => props.theme['purple-dark']};
  }
`

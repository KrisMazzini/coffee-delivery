import styled from 'styled-components'

export const CoffeeListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  gap: 4rem 3.2rem;

  @media (min-width: 1440px) {
    justify-content: flex-start;
  }
`

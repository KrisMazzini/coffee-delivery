import styled from 'styled-components'

export const CoffeeListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 25.6rem);
  justify-content: center;
  gap: 4rem 3.2rem;

  @media (min-width: 1526px) {
    grid-template-columns: repeat(auto-fill, minmax(25.6rem, 1fr));
  }
`

import styled from 'styled-components'

export const HomeContainer = styled.main`
  max-width: 144rem;
  margin: 0 auto;
`

export const Coffees = styled.section`
  max-width: 144rem;
  padding: 3.2rem 0 15.7rem;

  h3 {
    margin-bottom: 5.4rem;

    font-weight: 800;
    font-size: 3.2rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

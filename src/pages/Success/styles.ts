import styled from 'styled-components'

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
  }

  @media (min-width: 1144px) {
    grid-template-areas: 'header header' 'details illustration';
  }
`

export const Header = styled.header`
  grid-area: header;

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

import styled from 'styled-components'

export const SuccessContainer = styled.main`
  display: grid;
  grid-template-areas: 'header header' 'details illustration';
  justify-content: space-between;
  align-items: center;
  gap: 2.8rem;
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

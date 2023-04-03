import styled from 'styled-components'

export const FormCardContainer = styled.div`
  padding: 4rem;
  border-radius: 6px;

  background-color: ${(props) => props.theme['base-card']};
`

export const Details = styled.div`
  margin-bottom: 3.2rem;

  display: grid;
  grid-template-areas: 'icon label' 'icon description';
  grid-template-columns: max-content 1fr;
  gap: 0.2rem 0.8rem;

  svg {
    grid-area: icon;
    width: 2.2rem;
    height: 2.2rem;
  }

  p:first-of-type {
    grid-area: label;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p:last-of-type {
    grid-area: description;

    font-size: 1.4rem;
    color: ${(props) => props.theme['base-text']};
  }
`

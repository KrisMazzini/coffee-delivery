import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: grid;
  grid-template-areas: 'image details' 'image controls';
  grid-template-columns: 6.4rem 1fr;
  gap: 0.8rem 2rem;

  padding-bottom: 2.4rem;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  img {
    grid-area: image;

    width: 6.4rem;
    height: 6.4rem;
  }
`

export const Details = styled.div`
  grid-area: details;

  display: flex;
  justify-content: space-between;
  align-items: center;

  span:first-child {
    color: ${(props) => props.theme['base-subtitle']};
  }

  span:last-child {
    font-weight: 700;
    color: ${(props) => props.theme['base-text']};
  }
`

export const Controls = styled.div`
  grid-area: controls;

  height: 3.2rem;

  display: flex;
  gap: 0.8rem;
`

export const RemoveButton = styled.button`
  padding: 0.65rem 0.8rem;
  border-radius: 6px;

  border: none;

  display: flex;
  align-items: center;
  gap: 0.4rem;

  font-size: 1.2rem;
  line-height: 100%;
  vertical-align: baseline;
  text-transform: uppercase;

  color: ${(props) => props.theme['base-text']};
  background-color: ${(props) => props.theme['base-button']};

  cursor: pointer;
  transition: all 150ms linear;

  svg {
    transition: inherit;
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};

    svg {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`

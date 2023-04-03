import styled from 'styled-components'

const CONTAINER_SIZES = {
  sm: 6,
  md: 20,
  lg: 56,
}

export type ContainerSizeType = keyof typeof CONTAINER_SIZES

interface InputContainerProps {
  fill: boolean
  size: ContainerSizeType
}

export const InputContainer = styled.div<InputContainerProps>`
  flex-grow: ${(props) => (props.fill ? 1 : 0)};
  flex-shrink: 0;

  width: ${(props) => `
    ${CONTAINER_SIZES[props.size]}rem
  `};

  padding: 1.2rem;
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;

  display: flex;
  align-items: center;
  gap: 0.4rem;

  background-color: ${(props) => props.theme['base-input']};
  transition: all 150ms linear;

  input {
    width: 100%;
    flex-grow: 1;

    outline: none;
    border: none;

    font-size: 1.4rem;
    color: ${(props) => props.theme['base-text']};
    background-color: inherit;

    transition: inherit;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
      text-transform: capitalize;
    }
  }

  &:focus-within {
    border-color: ${(props) => props.theme['yellow-dark']};
  }
`

export const Optional = styled.span`
  font-size: 1.2rem;
  font-style: italic;
  color: ${(props) => props.theme['base-label']};
`

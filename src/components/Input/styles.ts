import styled, { keyframes } from 'styled-components'

const CONTAINER_SIZES = {
  sm: 6,
  md: 20,
  lg: 56,
}

export type ContainerSizeType = keyof typeof CONTAINER_SIZES

interface InputContainerProps {
  fill: boolean
  size: ContainerSizeType
  hasError: boolean
}

const showError = keyframes`
  from {
    bottom: 0;
    opacity: 0;
  }

  to {
    bottom: -1.4rem;
    opacity: 1;
  }
`

export const InputContainer = styled.div<InputContainerProps>`
  flex-grow: ${(props) => (props.fill ? 1 : 0)};
  flex-shrink: 0;

  width: ${(props) => `
    ${CONTAINER_SIZES[props.size]}rem
  `};

  padding: 1.2rem;
  border: 1px solid
    ${(props) =>
      props.hasError ? props.theme.warning : props.theme['base-button']};
  border-radius: 4px;

  display: flex;
  align-items: center;
  gap: 0.4rem;

  position: relative;

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

  p {
    position: absolute;
    left: 0;
    bottom: -1.4rem;
    font-size: 1rem;
    color: ${(props) => props.theme.warning};

    animation: ${showError} 200ms linear forwards;
  }

  &:focus-within {
    border-color: ${(props) =>
      props.hasError ? props.theme.warning : props.theme['yellow-dark']};
  }
`

export const Optional = styled.span`
  font-size: 1.2rem;
  font-style: italic;
  color: ${(props) => props.theme['base-label']};
`

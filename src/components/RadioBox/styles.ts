import styled from 'styled-components'

const BaseRadioBoxContainer = styled.label`
  padding: 1.6rem;
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 6px;

  display: flex;
  align-items: center;
  gap: 1.2rem;

  font-size: 1.2rem;
  line-height: 160%;
  text-transform: uppercase;
  white-space: nowrap;

  color: ${(props) => props.theme['base-subtitle']};
  background-color: ${(props) => props.theme['base-button']};

  cursor: pointer;
  transition: all 150ms linear;

  position: relative;

  > * {
    cursor: pointer;
  }

  svg {
    width: 1.6rem;
    height: 1.6rem;
  }
`

export const UncheckedRadioBoxContainer = styled(BaseRadioBoxContainer)`
  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
    border-color: ${(props) => props.theme['base-hover']};
  }
`

export const CheckedRadioBoxContainer = styled(BaseRadioBoxContainer)`
  background-color: ${(props) => props.theme['purple-light']};
  border-color: ${(props) => props.theme.purple};
`

export const Input = styled.input`
  display: none;
`

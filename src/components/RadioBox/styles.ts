import styled from 'styled-components'

const BaseRadioBoxContainer = styled.div`
  padding: 1.6rem;
  border-radius: 6px;

  display: flex;
  align-items: center;
  gap: 1.2rem;

  background-color: ${(props) => props.theme['base-button']};
  border: 1px solid ${(props) => props.theme['base-button']};

  cursor: pointer;
  transition: all 150ms linear;

  position: relative;

  > * {
    cursor: pointer;
  }

  label {
    font-size: 1.2rem;
    line-height: 160%;
    text-transform: uppercase;
    color: ${(props) => props.theme['base-subtitle']};
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

export const IconWrapper = styled.div`
  width: 1.6rem;
  height: 1.6rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: inherit;

  position: absolute;
  top: 50%;
  left: 1.6rem;
  transform: translateY(-50%);
`

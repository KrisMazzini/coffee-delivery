import { IconContext } from 'phosphor-react'
import { InputHTMLAttributes, ReactNode } from 'react'
import { useTheme } from 'styled-components'
import {
  UncheckedRadioBoxContainer,
  CheckedRadioBoxContainer,
  IconWrapper,
} from './styles'

interface RadioBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: ReactNode
  handleSelectOption: () => void
}

export function RadioBox({
  icon,
  id,
  name,
  title,
  checked,
  handleSelectOption,
}: RadioBoxProps) {
  const theme = useTheme()

  const RadioBoxContainer = checked
    ? CheckedRadioBoxContainer
    : UncheckedRadioBoxContainer

  return (
    <RadioBoxContainer onClick={handleSelectOption}>
      <IconContext.Provider value={{ size: 16, color: theme.purple }}>
        <IconWrapper>{icon}</IconWrapper>
      </IconContext.Provider>
      <input
        type="radio"
        id={id}
        name={name}
        title={title}
        value={id}
        checked={checked}
        onChange={handleSelectOption}
        onClick={(event) => event.stopPropagation()}
        required
      />
      <label htmlFor={id} onClick={(event) => event.stopPropagation()}>
        {title}
      </label>
    </RadioBoxContainer>
  )
}

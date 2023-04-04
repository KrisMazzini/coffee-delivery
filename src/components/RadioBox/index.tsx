import { IconContext } from 'phosphor-react'
import { ChangeEvent, InputHTMLAttributes, ReactNode, useState } from 'react'
import { useTheme } from 'styled-components'
import {
  UncheckedRadioBoxContainer,
  CheckedRadioBoxContainer,
  IconWrapper,
} from './styles'

interface RadioBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: ReactNode
}

export function RadioBox({ icon, id, name, title }: RadioBoxProps) {
  const [checked, setChecked] = useState(false)
  const theme = useTheme()

  const RadioBoxContainer = checked
    ? CheckedRadioBoxContainer
    : UncheckedRadioBoxContainer

  function handleChangeCheck(event: ChangeEvent<HTMLInputElement>) {
    setChecked(event.target.checked)
  }

  function handleCheckRadio() {
    setChecked(true)
  }

  return (
    <RadioBoxContainer onClick={handleCheckRadio}>
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
        onChange={handleChangeCheck}
        onClick={(event) => event.stopPropagation()}
        required
      />
      <label htmlFor={id} onClick={(event) => event.stopPropagation()}>
        {title}
      </label>
    </RadioBoxContainer>
  )
}

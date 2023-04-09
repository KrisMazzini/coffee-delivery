import { useFormContext } from 'react-hook-form'
import { InputHTMLAttributes, ReactNode } from 'react'
import { useTheme } from 'styled-components'
import { IconContext } from 'phosphor-react'

import {
  UncheckedRadioBoxContainer,
  CheckedRadioBoxContainer,
  Input,
} from './styles'

interface RadioBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: ReactNode
  name: string
  handleSelectOption: () => void
}

export function RadioBox({ icon, id, name, title }: RadioBoxProps) {
  const theme = useTheme()
  const { register, watch } = useFormContext()

  const selectedPaymentOption = watch('payment')

  const RadioBoxContainer =
    selectedPaymentOption === id
      ? CheckedRadioBoxContainer
      : UncheckedRadioBoxContainer

  return (
    <>
      <Input
        type="radio"
        id={id}
        title={title}
        value={id}
        onClick={(event) => event.stopPropagation()}
        required
        {...register(name)}
      />
      <RadioBoxContainer htmlFor={id}>
        <IconContext.Provider value={{ size: 16, color: theme.purple }}>
          {icon}
        </IconContext.Provider>
        {title}
      </RadioBoxContainer>
    </>
  )
}

import { InputHTMLAttributes } from 'react'
import { ErrorMessage } from '@hookform/error-message'
import { useFormContext, RegisterOptions } from 'react-hook-form'

import { ContainerSizeType, InputContainer, Optional } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  registerOptions?: RegisterOptions
  containerSize?: ContainerSizeType
  grow?: boolean
}

export function Input({
  containerSize = 'md',
  grow = false,
  name,
  registerOptions,
  ...inputData
}: InputProps) {
  const { value, required } = inputData
  const { register, getFieldState } = useFormContext()
  const { error } = getFieldState(name)

  const hasError = !!error

  return (
    <InputContainer size={containerSize} grow={grow} hasError={hasError}>
      <input {...inputData} {...register(name, registerOptions)} />
      {!required && !value && <Optional>Opcional</Optional>}
      <ErrorMessage as="p" name={name} />
    </InputContainer>
  )
}

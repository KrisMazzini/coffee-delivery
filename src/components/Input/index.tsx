import { InputHTMLAttributes } from 'react'
import { ContainerSizeType, InputContainer, Optional } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  containerSize?: ContainerSizeType
  fill?: boolean
}

export function Input({
  containerSize = 'md',
  fill = false,
  ...inputData
}: InputProps) {
  const { value, required } = inputData

  return (
    <InputContainer size={containerSize} fill={fill}>
      <input {...inputData} />
      {!required && !value && <Optional>Opcional</Optional>}
    </InputContainer>
  )
}

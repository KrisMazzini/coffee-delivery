import { ReactNode } from 'react'

import { Details, FormCardContainer } from './styles'

interface FormCardProps {
  icon: ReactNode
  label: string
  description: string
  children: ReactNode
}

export function FormCard({
  icon,
  label,
  description,
  children,
}: FormCardProps) {
  return (
    <FormCardContainer>
      <Details>
        {icon}
        <p>{label}</p>
        <p>{description}</p>
      </Details>
      {children}
    </FormCardContainer>
  )
}

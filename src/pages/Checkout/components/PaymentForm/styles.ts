import styled, { keyframes } from 'styled-components'

const showError = keyframes`
  from {
    margin-top: 0;
    opacity: 0;
  }

  to {
    margin-top: 1.2rem;
    opacity: 1;
  }
`

export const PaymentFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

  > * {
    width: 100%;
  }

  @media (min-width: 1440px) {
    flex-direction: row;
  }
`

export const ErrorText = styled.p`
  font-size: 1.2rem;
  color: ${(props) => props.theme.warning};

  animation: ${showError} 300ms ease-in-out forwards;
`

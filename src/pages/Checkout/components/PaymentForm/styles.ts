import styled from 'styled-components'

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

import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  form {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3.2rem;

    padding-bottom: 4rem;

    @media (min-width: 1440px) {
      grid-template-columns: 1fr 44.8rem;
    }
  }
`

export const CheckoutSection = styled.section`
  > h2 {
    margin-bottom: 1.5rem;

    font-weight: 700;
    font-size: 1.8rem;

    color: ${(props) => props.theme['base-subtitle']};
  }

  > div:not(:last-child) {
    margin-bottom: 1.2rem;
  }
`

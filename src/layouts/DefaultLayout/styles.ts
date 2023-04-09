import styled from 'styled-components'

export const LayoutContainer = styled.div`
  min-width: 36rem;
  overflow: auto;
  padding: 7.73rem 4rem;

  transition: padding 300ms linear;

  @media (min-width: 768px) {
    padding: 10.93rem 8rem;
  }

  @media (min-width: 1440px) {
    padding: 10.93rem 16rem;
  }
`

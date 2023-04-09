import styled from 'styled-components'

export const DeliveryDetailsContainer = styled.div`
  width: 100%;

  padding: 0.1rem;
  border-radius: 6px 36px;
  background: linear-gradient(90deg, #dbac2c, #8047f8);
  overflow: hidden;

  > ul {
    border-radius: 5px 35px;
    padding: 3.9rem;

    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    background-color: ${(props) => props.theme.white};
  }

  @media (min-width: 1144px) {
    width: 52.6rem;
  }
`

export const Detail = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  span {
    color: ${(props) => props.theme['base-text']};
  }
`

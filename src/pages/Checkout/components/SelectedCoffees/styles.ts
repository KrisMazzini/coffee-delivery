import styled from 'styled-components'

export const SelectedCoffeesContainer = styled.div`
  width: 44.8rem;
  padding: 4rem;
  border-radius: 6px 44px;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  background-color: ${(props) => props.theme['base-card']};
`

export const CoffeeList = styled.ul`
  max-height: 31.5rem;
  overflow-y: auto;

  display: flex;
  flex-direction: inherit;
  gap: inherit;

  position: relative;

  &::-webkit-scrollbar {
    position: absolute;
    width: 2rem;
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.purple};
    border-left: 0.9rem solid ${(props) => props.theme['base-card']};
    border-right: 0.9rem solid ${(props) => props.theme['base-card']};
  }
`

export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`

const BasePriceSummay = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const PriceSummary = styled(BasePriceSummay)`
  color: ${(props) => props.theme['base-text']};

  span:first-child {
    font-size: 1.4rem;
  }
`

export const TotalSummary = styled(BasePriceSummay)`
  color: ${(props) => props.theme['base-subtitle']};

  span {
    font-size: 2rem;
    font-weight: 700;
  }
`

export const ConfirmOrderButton = styled.button`
  padding: 1.2rem;
  border: none;
  border-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 700;
  font-size: 1.4rem;
  line-height: 160%;
  text-transform: uppercase;

  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.yellow};

  cursor: pointer;
  transition: all 150ms linear;

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`

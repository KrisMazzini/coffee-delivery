import styled, { keyframes } from 'styled-components'

export const CitySelectorContainer = styled.div`
  min-width: 14.6rem;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;

  padding: 0.8rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['purple-light']};

  position: relative;
  cursor: pointer;

  span {
    margin: 0 auto;
    font-size: 1.4rem;
    color: ${(props) => props.theme['purple-dark']};
  }
`

const openContainer = keyframes`
  from {
    max-height: 0;
  }

  to {
    max-height: 15.6rem;
  }
`

const CityList = styled.ul`
  min-width: 14.6rem;

  overflow-y: auto;
  border-radius: 6px;

  position: fixed;
  top: 5.6rem;
  z-index: 3;

  display: flex;
  flex-direction: column;

  background-color: inherit;

  transition: all 500ms linear;
  animation: ${openContainer} 500ms ease-in-out both reverse;

  li {
    padding: 0.8rem;

    font-size: 1.4rem;
    color: ${(props) => props.theme['purple-dark']};

    transition: all 150ms linear;

    &:hover {
      background-color: ${(props) => props.theme['purple-dark']};
      color: ${(props) => props.theme.white};
    }
  }

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 768px) {
    top: 7.2rem;
  }
`

export const OpenCityList = styled(CityList)`
  animation: ${openContainer} 500ms ease-in-out both;
`

export const ClosedCityList = styled(CityList)`
  animation: ${openContainer} 500ms ease-in-out both reverse;
`

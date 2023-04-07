import styled, { css } from 'styled-components'

interface HeaderContainerProps {
  pageScrolled: boolean
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1.3rem;

  padding: 3.2rem 16rem;
  box-shadow: none;
  transition: box-shadow 300ms linear;

  background-color: ${(props) => `${props.theme.background}F5`};
  ${(props) =>
    props.pageScrolled
      ? css`
          box-shadow: 0px 0px 10px 2px ${props.theme['base-hover']};
        `
      : ''}

  > *:first-child {
    margin-right: auto;
  }
`

export const CartWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.8rem;
  border-radius: 6px;

  background-color: ${(props) => props.theme['yellow-light']};

  position: relative;
`

export const CartItemsIndicator = styled.div`
  width: 2rem;
  height: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  right: 0;
  top: 0;
  transform: translate(50%, -50%);

  border-radius: 50%;

  font-weight: 700;
  font-size: 1.2rem;
  letter-spacing: -6%;

  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['yellow-dark']};
`

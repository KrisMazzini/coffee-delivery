import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 62.5%;
    }

    html {
        background-color: ${(props) => props.theme.background};
    }

    body, p, span, input, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 130%;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-family: 'Baloo 2', cursive;
        line-height: 130%;
    }

    a {
        text-decoration: none;
    }

    input {
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        &::-moz-number-spin-box,
        &::-ms-spin {
            display: none;
        }
    }
`

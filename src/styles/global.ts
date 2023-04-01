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

    body, input, button {
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
        line-height: 130%;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Baloo 2', cursive;
        line-height: 130%;
    }
`

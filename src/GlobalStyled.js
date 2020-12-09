import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyled = createGlobalStyle`
    body, html {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }

    * {
        box-sizing: border-box;
        user-select: none;
        white-space: nowrap;
    }
`

export default GlobalStyled
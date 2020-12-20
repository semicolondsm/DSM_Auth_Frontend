import styled, { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
    body, html {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        position: relative;
    }

    #root {
        width: 100%;
        height: 100%;
    }

    * {
        box-sizing: border-box;
        user-select: none;
        -webkit-user-select: text;
        white-space: nowrap;
        letter-spacing: -1px;
    }
`;

export default GlobalStyled;

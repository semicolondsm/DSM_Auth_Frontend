import { createGlobalStyle } from "styled-components";

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
        letter-spacing: -1.5px;
        font-family: 'Noto Sans KR', sans-serif;    
    }

    .clicked {
        transition: 0.2s all ease-out;
        overflow-y: visible;
    }

    .clicked::after {
        transform: translateY(-50%) rotate(-50deg) !important;
    }

    .clicked::before {
        transform: translateY(-50%) rotate(50deg) !important;
    }

    code span{
        letter-spacing: -.3px;
    }
`;

export default GlobalStyled;

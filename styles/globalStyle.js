import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: 'Inter', sans-serif;
        font-size: 1.6rem;
        min-height: 100vh;
    }

    :root {
        --white: #ffffff;
        --black: #000000;
        --text: #5e6066;
        --income: #7f60f3;
        --expenses: #fd7477;
        --sidebar: #f4f6ff;
    }

    .icon {
        color: var(--text);
        width: 2.4rem;
        height: 2.4rem;
    }

    &.hover {
        &:hover {
            color: var(--income);
        }
    }
`;
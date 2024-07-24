import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
    };

    *, ::after, ::before {
        box-sizing: inherit;
    };

    main {
        font-family: "Lexend Deca", sans-serif;
        background-color: #eee;
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 100vh;
        padding: 0 10px 10px;
    };
`;
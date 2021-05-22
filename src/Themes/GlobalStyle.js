import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*,*::before, *::after{
    margin:0; padding:0;
    box-sizing: border-box;
    font-family: 'Reem Kufi', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    font-weight: 400;
}

button {
    background:none;
    border:none;
    cursor:pointer;
}

html {
    font-size: 62.5%;
}

body {
    overflow-x: hidden;
    font-size: 1.6rem;
    background-color: #FEF4E6;
    padding: 0 24px;

    @media (min-width: 800px) {
        padding: 0 165px;
    }
}
`;

export default GlobalStyle;

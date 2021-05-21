import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*,*::before, *::after{
    margin:0; padding:0;
    box-sizing: border-box;
    font-family: 'Reem Kufi', sans-serif;
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
    font-size: 1.6rem;
    background-color: #E5E5E5;
    padding: 0 24px;

    @media (min-width: 800px) {
        padding: 0 165px;
    }
}
`;

export default GlobalStyle;

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Reem+Kufi&family=Rozha+One&display=swap');

*,*::before, *::after{
    margin:0; padding:0;
    box-sizing: border-box;
}

button {
    background:none;
    border:none;
}

html {
    font-size: 62.5%;
}

body {
    font-size: 1.6rem;
    background-color: #E5E5E5;
    font-family: 'Reem Kufi', sans-serif;
    padding: 0 24px;

    @media (min-width: 800px) {
        padding: 0 165px;
    }
}
`;

export default GlobalStyle;

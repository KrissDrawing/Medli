import React from "react";
import ReactDOM from "react-dom";
import App from "App";
import { ThemeProvider } from "styled-components";
import { theme } from "Themes/mainTheme";
import GlobalStyle from "Themes/GlobalStyle";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

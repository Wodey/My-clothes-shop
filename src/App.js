import React from "react";
import {ThemeProvider, createGlobalStyle} from "styled-components";
import Header from "./Header";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@900&family=Montserrat:ital,wght@1,300&display=swap');
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 10px;
    font-family: ${props => props.theme.font_main};
    color: ${props => props.theme.main};
  }

  a {
    text-decoration: none;
  }
`;

const theme = {
    color_main: "#495464",
    color_extra: "#e8e8e8",
    color_active: "#ff0000",
    font_main: "'Lato', sans-serif",
    font_extra: "'Montserrat', sans-serif"
}

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Header />
      <GlobalStyle />
    </ThemeProvider>
    </>
  );
}

export default App;

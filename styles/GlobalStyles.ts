import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.heading1.family};
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export default GlobalStyle;

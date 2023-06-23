import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: ${(props) => props.theme.fonts.poppins};

    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${(props) => props.theme.colors.background};
  }

  button, input {
    border: none;
    outline: none;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;

import { createGlobalStyle } from "styled-components";

export enum Colors {
  BLUE = "#001a98",
  RED = "#e20000",
  DARK_RED = "#9E0000",
  GREEN = "#036100",
  DARK_GREEN = "#044200",
  PURPLE = "#6700C2",
  WHITE = "#FFF",
}

export enum FontSize {
  Normal = "1.0em",
  Medium = "1.2em",
  Large = "1.4em",
}

export const GlobalStyle = createGlobalStyle`
  * {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Source Sans Pro', sans-serif;
    margin: 0;
    padding: 0;
  }

  img {
    max-width: 100%;
  }

  .container {
    padding: 2em;
    max-width: 1200px;
  }
`;

import { createGlobalStyle } from "styled-components";

export enum Colors {
  Blue = "#001a98",
  Red = "#e20000",
  DarkRed = "#9E0000",
  Green = "#036100",
  DarkGreen = "#044200",
  Purple = "#6700C2",
  Grey = "#595959",
  White = "#FFF",
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

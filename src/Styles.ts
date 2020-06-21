import { createGlobalStyle } from "styled-components";

export enum COLORS {
  BLUE = "#001a98",
  RED = "#e20000",
  DARK_RED = "#9E0000",
  GREEN = "#06bf00",
  DARK_GREEN = "#049800",
  PURPLE = "#8901ff",
  WHITE = "#FFF",
}

export enum FONT_SIZE {
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
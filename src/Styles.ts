import { createGlobalStyle } from "styled-components";

export enum Colors {
  Blue = "#001a98",
  DarkBlue = "#000F5C",
  LightBlue = "#6675C1",
  Red = "#e20000",
  DarkRed = "#9E0000",
  Green = "#036100",
  DarkGreen = "#044200",
  Purple = "#6700C2",
  LightPurple = "#9214FF",
  Black = "#000",
  Grey = "#595959",
  OffWhite = "#C7C7C7",
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
    font-size: ${FontSize.Normal};
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

  a {
    color: ${Colors.Blue};
  }
`;

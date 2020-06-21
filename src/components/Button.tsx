import styled from "styled-components";
import { Colors, FontSize } from "../Styles";

export const Button = styled.button`
  background-color: ${Colors.Green};
  border: none;
  border-radius: 10px;
  color: ${Colors.White};
  font-size: ${FontSize.Medium};
  padding: 0.75em 1.5em;

  &:hover {
    background-color: ${Colors.DarkGreen};
  }
`;

export const SecondaryButton = styled.button`
  background-color: ${Colors.Blue};
  border: none;
  border-radius: 10px;
  color: ${Colors.White};
  font-size: ${FontSize.Medium};
  padding: 0.75em 1.5em;

  &:hover {
    background-color: ${Colors.DarkBlue};
  }
`;

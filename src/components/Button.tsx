import styled from "styled-components";
import { Colors, FontSize } from "../Styles";

const Button = styled.button`
  background-color: ${Colors.Green};
  border: none;
  border-radius: 4px;
  color: ${Colors.White};
  font-size: ${FontSize.Medium};
  padding: 1em 2em;

  &:hover {
    background-color: ${Colors.DarkGreen};
  }

  &:disabled {
    background-color: ${Colors.Grey};

    &:hover {
      background-color: ${Colors.Grey};
    }
  }
`;
export default Button;

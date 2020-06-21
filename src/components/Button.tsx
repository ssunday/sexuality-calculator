import styled from "styled-components";
import { Colors, FontSize } from "../Styles";

const Button = styled.button`
  background: ${Colors.GREEN};
  border: none;
  border-radius: 4px;
  color: ${Colors.WHITE};
  font-size: ${FontSize.Medium};
  padding: 1em 2em;

  &:hover {
    background: ${Colors.DARK_GREEN};
  }
`;
export default Button;

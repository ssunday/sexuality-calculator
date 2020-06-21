import styled from "styled-components";
import { COLORS, FONT_SIZE } from "../Styles";

const Button = styled.button`
  background: ${COLORS.GREEN};
  border: none;
  border-radius: 4px;
  color: ${COLORS.WHITE};
  font-size: ${FONT_SIZE.Medium};
  padding: 1em 2em;

  &:hover {
    background: ${COLORS.DARK_GREEN};
  }
`;
export default Button;

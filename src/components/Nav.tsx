import styled from "styled-components";
import { COLORS, FONT_SIZE } from "../Styles";

const Nav = styled.nav`
  background: ${COLORS.BLUE};
  display: flex;
  justify-content: space-around;
  padding: 1em 0.5em;
  width: 100%;

  a {
    color: ${COLORS.WHITE};
    font-size: ${FONT_SIZE.MEDIUM};
  }
`;
export default Nav;

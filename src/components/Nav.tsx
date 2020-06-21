import styled from "styled-components";
import { Colors, FontSize } from "../Styles";

const Nav = styled.nav`
  background: ${Colors.Blue};
  display: flex;
  padding: 1em 0.5em;
  width: 100%;

  a {
    color: ${Colors.White};
    font-size: ${FontSize.Medium};
    margin: 0 1em;
    padding: 0.25em;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
export default Nav;

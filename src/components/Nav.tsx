import styled from "styled-components";
import { Colors, FontSize } from "../Styles";

const Nav = styled.nav`
  background-color: ${Colors.Blue};
  border-bottom: 4px solid ${Colors.Grey};
  display: flex;
  width: 100%;

  a {
    border-bottom: 4px solid ${Colors.Blue};
    color: ${Colors.White};
    font-size: ${FontSize.Large};
    margin: 0 1em 0 0;
    padding: 1em 0.5em 0.5em 1em;
    text-decoration: none;

    &:hover {
      border-bottom-color: ${Colors.LightBlue};
      color: ${Colors.OffWhite};
    }
  }

  a[aria-current="page"] {
    border-bottom-color: ${Colors.LightPurple};
  }
`;

export default Nav;

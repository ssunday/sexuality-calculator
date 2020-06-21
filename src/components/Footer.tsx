import styled from "styled-components";
import { Colors, FontSize } from "../Styles";

const Footer = styled.footer`
  background: ${Colors.DarkRed};
  display: flex;
  justify-content: space-around;
  padding: 1em 0.5em;
  width: 100%;

  p,
  a {
    color: ${Colors.White};
    font-size: ${FontSize.Medium};
    padding: 0.25em;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
export default Footer;

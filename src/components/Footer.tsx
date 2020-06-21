import styled from "styled-components";
import { COLORS, FONT_SIZE } from "../Styles";

const Footer = styled.footer`
  background: ${COLORS.DARK_RED};
  display: flex;
  justify-content: space-around;
  padding: 1em 0.5em;
  width: 100%;

  p, a {
    color: ${COLORS.WHITE};
    font-size: ${FONT_SIZE.MEDIUM};
    padding: 0.25em;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
export default Footer;

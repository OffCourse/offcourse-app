import styled from "styled-components";
import { Theme } from "types";

type BackdropProps = {
  theme: Theme;
  isVisible?: boolean;
};

const Backdrop = styled.div.attrs(
  ({ theme, isVisible = false }: BackdropProps) => ({
    background: theme.grayScale[3]
  })
)<BackdropProps>`
  display: block;
  position: fixed;
  background-color: ${({ background }) => background};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden auto;
  pointer-events: ${({ isVisible }) => (isVisible ? "auto" : "none")};
`;

export default Backdrop;

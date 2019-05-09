import styled from "styled-components";

const Backdrop = styled.div<{
  isVisible: boolean;
}>`
  display: block;
  position: fixed;
  background-color: ${({ theme }) => theme.colors.grayScale[3]};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden auto;
  pointer-events: ${({ isVisible }) => (isVisible ? "auto" : "none")};
`;

export default Backdrop;

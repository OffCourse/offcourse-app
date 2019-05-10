import styled from "styled-components";
import { Variant, Size } from "enums";

const textProps = {
  [Size.SMALL]: { fontSize: 2, lineHeight: 1 },
  [Size.NORMAL]: { fontSize: 3, lineHeight: 2 },
  [Size.LARGE]: { fontSize: 4, lineHeight: 4 },
  [Size.EXTRA_LARGE]: { fontSize: 5, lineHeight: 5 }
};

const HeadingWrapper = styled.h1<{
  href?: string;
  size: Size;
  isActive: boolean;
}>`
  display: block;
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.black : theme.grayScale[2]};
  line-height: ${({ theme, size }) =>
    theme.fontSizes[textProps[size].lineHeight]};
  font-size: ${({ theme, size }) => theme.fontSizes[textProps[size].fontSize]};
  font-family: ${({ theme }) => theme.fonts["bold"]};
  user-select: none;
  text-decoration: inherit;
  cursor: ${({ href }) => (href ? "pointer" : "cursor")};
  &:hover {
    color: ${({ isActive, href, onClick, theme }) =>
      isActive && (href || onClick)
        ? theme.colors.primary
        : isActive
        ? theme.colors.black
        : theme.colors.grayScale[2]};
  }
`;

export default HeadingWrapper;

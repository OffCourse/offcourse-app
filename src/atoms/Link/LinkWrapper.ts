import styled from "styled-components";
import { Size } from "enums";

const textProps = {
  [Size.SMALL]: { textSize: 0, lineHeight: 0 },
  [Size.NORMAL]: { textSize: 1, lineHeight: 2 },
  [Size.LARGE]: { textSize: 2, lineHeight: 3 }
};

const LinkWrapper = styled.a<{
  size: Size;
  isDisabled: boolean;
  isBasic: boolean;
  isActive: boolean;
}>`
  line-height: ${({ theme, size }) =>
    theme.lineHeights[textProps[size].lineHeight]};
  padding-bottom: 0;
  color: ${({ theme, isActive, isDisabled }) =>
    isActive
      ? theme.colors.primary
      : isDisabled
      ? theme.colors.disabled
      : theme.colors.black};
  font-size: ${({ theme, size }) => theme.fontSizes[textProps[size].textSize]};
  font-family: ${({ theme }) => theme.fonts.bold};
  border-bottom: ${({ theme, isBasic }) =>
    isBasic ? theme.borders[0] : theme.borders[2]};
  border-color: ${({ theme, isDisabled }) =>
    isDisabled ? theme.colors.disabled : theme.colors.black};
  cursor: ${({ isDisabled }) => (isDisabled ? "default" : "pointer")}
  user-select: none;
  box-sizing: border-box;
  text-decoration: inherit;
  :focus {
    outline: "none";
  }
  :hover {
    color: ${({ theme, isDisabled }) =>
      isDisabled ? theme.colors.disabled : theme.colors.black};
    border-color: ${({ theme, isDisabled }) =>
      isDisabled ? theme.colors.disabled : theme.colors.primary};
  }
`;
export default LinkWrapper;

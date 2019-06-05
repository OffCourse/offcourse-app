import styled from "styled-components";
import { Direction, Variant, Size, ErrorState } from "enums";
import { Theme, Link as LinkType } from "types";

type LinkWrapperProps = LinkType & {
  theme: Theme;
  size: Size;
  isBasic: boolean;
  isActive: boolean;
  isDisabled: boolean;
};

const textProps = {
  [Size.SMALL]: { textSize: 0, lineHeight: 0 },
  [Size.NORMAL]: { textSize: 1, lineHeight: 2 },
  [Size.LARGE]: { textSize: 2, lineHeight: 3 },
  [Size.EXTRA_LARGE]: { textSize: 3, lineHeight: 4 }
};

const LinkWrapper = styled.a.attrs(
  ({ theme, size, isBasic, isActive, isDisabled }: LinkWrapperProps) => {
    const { base, bold } = theme.fonts;
    const primary = theme.colors[Variant.DEFAULT];
    const [_, __, disabled, ___, black] = theme.grayScale;
    const lineHeight = theme.lineHeights[textProps[size].lineHeight];
    return {
      disabled: isDisabled,
      cursor: isDisabled ? "default" : "pointer",
      fontSize: theme.fontSizes[textProps[size].textSize],
      fontFamily: isBasic ? base : bold,
      borderBottom: isBasic ? theme.borders[0] : theme.borders[2],
      borderColor: isDisabled ? disabled : black,
      textColor: isActive ? primary : isDisabled ? disabled : black,
      hoverColor: isDisabled ? disabled : black,
      hoverBorderColor: isDisabled ? disabled : primary,
      lineHeight
    };
  }
)<LinkWrapperProps>`
  border: none;
  background-color: transparent;
  line-height: ${({ lineHeight }) => lineHeight};
  font-size: ${({ fontSize }) => fontSize};
  text-align: inherit;
  padding: 0;
  color: ${({ textColor }) => textColor};
  font-family: ${({ fontFamily }) => fontFamily};
  border-bottom: ${({ borderBottom }) => borderBottom};
  border-color: ${({ borderColor }) => borderColor};
  cursor: ${({ cursor }) => cursor};
  user-select: none;
  box-sizing: border-box;
  text-decoration: inherit;
  :focus {
    outline: none;
  }
  :hover {
    color: ${({ hoverColor }) => hoverColor};
    border-color: ${({ hoverBorderColor }) => hoverBorderColor};
  }
`;

export default LinkWrapper;

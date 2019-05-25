import React, { FunctionComponent } from "react";
import PropTypes from "prop-types";
import { identity } from "ramda";
import { formatTitle } from "../helpers";
import styled from "styled-components";
import { Theme } from "types";
import { Direction, Variant, Size, ErrorState } from "enums";
import { Link as LinkType } from "types";

type LinkProps = LinkType & {
  theme: Theme;
  size?: Size;
  isBasic?: boolean;
  isActive?: boolean;
  isDisabled?: boolean;
};

const textProps = {
  [Size.SMALL]: { textSize: 0, lineHeight: 0 },
  [Size.NORMAL]: { textSize: 1, lineHeight: 2 },
  [Size.LARGE]: { textSize: 2, lineHeight: 3 },
  [Size.EXTRA_LARGE]: { textSize: 3, lineHeight: 4 }
};

const Link = styled.a.attrs(
  ({
    theme,
    size = Size.NORMAL,
    isBasic = false,
    isActive = false,
    isDisabled = false,
    href,
    children,
    onClick
  }: LinkProps) => {
    const { fonts, colors } = theme;
    const { base, bold } = fonts;
    const { disabled, black, primary } = colors;
    const lineHeight = theme.lineHeights[textProps[size].lineHeight];
    return {
      as: onClick ? "button" : "a",
      onClick: isDisabled ? onClick : identity,
      href: isDisabled ? undefined : href,
      children: formatTitle(children),
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
)<LinkProps>`
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

export default Link;

import React, { FunctionComponent, MouseEvent } from "react";
import PropTypes from "prop-types";
import { formatTitle } from "../helpers";
import { Variant, Size } from "enums";
import styled from "styled-components";
import { variant as v, width, style } from "styled-system";
import { Theme, Button as ButtonType } from "types";

type ButtonProps = ButtonType & {
  theme: Theme;
  children: string;
};

const Button = styled.button.attrs(
  ({
    theme,
    href,
    variant = Variant.DEFAULT,
    isSubmit,
    children,
    onClick,
    tabIndex
  }: ButtonProps) => {
    const isDisabled = variant === Variant.DISABLED;
    const buttonStyle = v({
      key: "signalColorCombos"
    });
    const buttonSize = style({
      prop: "size",
      cssProperty: "width",
      key: "buttonSizes"
    });
    return {
      as: href ? "a" : "button",
      href: isDisabled ? null : href,
      disabled: isDisabled,
      tabindex: tabIndex,
      onClick,
      type: isSubmit ? "submit" : "button",
      border: theme.borders[0],
      borderBottom: theme.borders[2],
      padding: `${theme.space[4]} ${theme.space[6]}`,
      fontFamily: theme.fonts.bold,
      fontSize: theme.fontSizes[1],
      children: formatTitle(children),
      buttonStyle,
      buttonSize
    };
  }
)<ButtonProps>`
  display: flex;
  align-items: center;
  height: 2.813rem;
  border: ${({ border }) => border};
  border-bottom: ${({ borderBottom }) => borderBottom};
  padding: ${({ padding }) => padding};
  font-family: ${({ fontFamily }) => fontFamily};
  font-family: ${({ fontSize }) => fontSize};
  justify-content: center;
  line-height: 1;
  box-sizing: border-box;
  user-select: none;

  :focus {
    outline: none;
  }
  :disabled {
    cursor: default;
  }

  text-decoration: inherit;

  ${({ buttonStyle }) => buttonStyle}
  ${({ buttonSize }) => buttonSize}
`;

Button.defaultProps = { variant: Variant.DEFAULT };

export default Button;

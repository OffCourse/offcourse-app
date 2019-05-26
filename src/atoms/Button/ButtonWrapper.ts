import { formatTitle } from "../helpers";
import { Variant, Size } from "enums";
import styled from "styled-components";
import { variant as v, width, style } from "styled-system";
import { Theme, Button as ButtonType } from "types";

type ButtonWrapperProps = ButtonType & {
  theme: Theme;
  type: "submit" | "button";
  isDisabled: boolean;
};

const ButtonWrapper = styled.button.attrs(
  ({ theme, isDisabled }: ButtonWrapperProps) => {
    const buttonStyle = v({
      key: "signalColorCombos"
    });
    const buttonSize = style({
      prop: "size",
      cssProperty: "width",
      key: "buttonSizes"
    });
    return {
      disabled: isDisabled,
      border: theme.borders[0],
      borderBottom: theme.borders[2],
      padding: `${theme.space[4]} ${theme.space[6]}`,
      fontFamily: theme.fonts.bold,
      fontSize: theme.fontSizes[1],
      lineHeight: theme.lineHeights[1],
      buttonStyle,
      buttonSize
    };
  }
)<ButtonWrapperProps>`
  display: flex;
  align-items: center;
  height: 2.813rem;
  border: ${({ border }) => border};
  border-bottom: ${({ borderBottom }) => borderBottom};
  padding: ${({ padding }) => padding};
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize};
  justify-content: center;
  line-height: ${({ lineHeight }) => lineHeight};
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

export default ButtonWrapper;

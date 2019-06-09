import { formatTitle } from "../helpers";
import { Variant, Size } from "enums";
import styled from "styled-components";
import { variant as v, width, style } from "styled-system";
import { Theme, Button as ButtonType } from "types";

type ButtonWrapperProps = ButtonType & {
  theme: Theme;
};

const buttonStyle = v({
  key: "signalColorCombos"
});

const buttonSize = style({
  prop: "size",
  cssProperty: "width",
  key: "buttonSizes"
});

const ButtonWrapper = styled.button<ButtonWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.813rem;
  box-sizing: border-box;
  user-select: none;
  text-decoration: inherit;
  border: ${({ theme }) => theme.borders[0]};
  border-bottom: ${({ theme }) => theme.borders[2]};
  padding: ${({ theme }) => `${theme.space[4]} ${theme.space[6]}`};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.fontSizes[1]};
  line-height: ${({ theme }) => theme.lineHeights[1]};

  :focus {
    outline: none;
  }

  :disabled {
    cursor: default;
  }

  ${buttonStyle}
  ${buttonSize}
`;

export default ButtonWrapper;

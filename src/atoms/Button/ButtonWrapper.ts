import styled from "styled-components";
import { variant, width, style } from "styled-system";
import { Size, Variant } from "enums";

const buttonStyle = variant({
  key: "signalColorCombos"
});

const buttonSize = style({
  prop: "size",
  cssProperty: "width",
  key: "buttonSizes"
});

const ButtonWrapper = styled.button<{
  variant: Variant;
  size: Size;
  href?: string | null;
}>`
  display: flex;
  align-items: center;
  height: 2.813rem;
  padding: ${({ theme }) => theme.space[4]} ${({ theme }) => theme.space[6]};
  border: ${({ theme }) => theme.borders[0]};
  border-bottom: ${({ theme }) => theme.borders[2]};
  font-size: ${({ theme }) => theme.fontSizes[1]};
  font-family: ${({ theme }) => theme.fonts.bold};
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

  ${buttonStyle}
  ${buttonSize}
`;

export default ButtonWrapper;

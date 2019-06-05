import styled from "styled-components";
import { Variant } from "enums";

const IconWrapper = styled.i<{
  target: string;
  type?: string;
  variant: Variant;
  href?: string;
}>`
  box-sizing: border-box;
  color: ${({ theme, variant }) => theme.colors[variant]};
  background-color: transparent;
  border: ${({ theme }) => theme.borders[0]};
  margin-right: 0;
  padding: 0;
  line-height: 1;

  &:hover {
    color: ${({ onClick, href, theme }) =>
      onClick || href
        ? theme.colors[Variant.INFO]
        : theme.colors[Variant.DEFAULT]};
  }

  &:focus {
    outline: none;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export default IconWrapper;

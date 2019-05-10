import styled from "styled-components";
import {space, border}  from "styled-system";

const IconWrapper = styled.i<{mx?: number, target: string, type?: string, color?: string, href?: string}>`
  box-sizing: border-box;
  color: ${({theme, color}) => theme.colors[color || "black"]};
  background-color: transparent;
  border: ${({theme}) => theme.borders[0]};
  font-size: 1;
  margin: 0 ${({ mx, theme }) => mx ? theme.space[mx] : 0 };
  padding: 0;
  line-height: 1;

  &:hover {
    color: ${({ onClick, href, theme }) =>
      onClick || href ? theme.colors.primary : theme.colors.black};
  }

  &:focus {
    outline: none;
    color: ${({ theme }) => theme.colors.primary};
  }

`;

export default IconWrapper;

import styled from "styled-components";
import { ReactNode } from "react";
import { Theme } from "types";

type TagWrapperProps = {
  children: ReactNode;
  theme: Theme;
  href: string;
  onClick?: (opts: { tag: string }) => void;
};

const TagWrapper = styled.div.attrs(({ theme }) => {
  const { primary, white, black } = theme.colors;
  return {
    backgroundColor: theme.grayScale[1],
    padding: `${theme.space[0]} ${theme.space[4]}`,
    primaryColor: primary,
    fontFamily: theme.fonts.bold,
    white,
    black
  };
})<TagWrapperProps>`
  display: inline-block;
  color: ${({ black }) => black};
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: ${({ padding }) => padding};
  &:hover {
    background-color: ${({ primaryColor }) => primaryColor};
    color: ${({ white }) => white};
  }
  cursor: pointer;
  user-select: none;
  box-sizing: border-box;
  font-family: ${({ fontFamily }) => fontFamily};
  font-weight: 700;
  text-decoration: inherit;
`;

export default TagWrapper;

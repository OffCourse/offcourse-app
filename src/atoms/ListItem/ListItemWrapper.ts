import styled from "styled-components";
import { Theme } from "types";
import { Link } from "atoms";

type ListItemWrapperProps = {
  theme: Theme;
  isLink?: boolean;
};

const ListItemWrapper = styled.li.attrs(
  ({ theme, isLink = false }: ListItemWrapperProps) => {
    const { black, white, primary } = theme.colors;
    return {
      backgroundColor: theme.grayScale[1],
      textColor: black,
      fontFamily: theme.fonts.bold,
      hoverBackgroundColor: primary,
      hoverTextColor: white,
      lineHeight: theme.lineHeights[2],
      fontSize: theme.fontSizes[1],
      padding: `${theme.space[4]} ${theme.space[4]}`
    };
  }
)<ListItemWrapperProps>`
  display: grid;
  padding: ${({ padding }) => padding};
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ textColor }) => textColor};
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize};
  line-height: ${({ lineHeight }) => lineHeight};
  user-select: none;
  :hover {
    background: ${({ hoverBackgroundColor }) => hoverBackgroundColor};
  }
  :hover {
    color: ${({ hoverTextColor }) => hoverTextColor};
    > ${Link} {
      color: ${({ hoverTextColor }) => hoverTextColor};
    }
  }

  > ${Link} {
    font-family: ${({ fontFamily }) => fontFamily};
  }
`;

export default ListItemWrapper;

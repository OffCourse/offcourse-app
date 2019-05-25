import React, { FunctionComponent, ReactNode, MouseEvent } from "react";
import styled from "styled-components";
import { formatTitle } from "../helpers";
import { Link } from "atoms";
import { Theme, ListItem as ListItemType } from "types";

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

const ListItem: FunctionComponent<ListItemType> = ({
  children,
  onClick,
  href
}) => {
  const isLink = !!(href || onClick);
  if (typeof children === "string") {
    const content = isLink ? (
      <Link isBasic href={href} onClick={onClick}>
        {children}
      </Link>
    ) : (
      formatTitle(children)
    );
    return <ListItemWrapper isLink={isLink}>{content}</ListItemWrapper>;
  }
  return <ListItemWrapper>{children}</ListItemWrapper>;
};

export default ListItem;

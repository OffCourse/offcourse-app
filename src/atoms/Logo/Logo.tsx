import React, { MouseEvent } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { identity } from "ramda";
import { Theme } from "types";
import { Size } from "enums";

/**
 * The logo component for the Offcourse project
 */

const multiplier = {
  [Size.SMALL]: 2.25,
  [Size.NORMAL]: 4,
  [Size.LARGE]: 6,
  [Size.EXTRA_LARGE]: 8
};

type LogoProps = {
  theme: Theme;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
  size?: Size;
};

const Logo = styled.div.attrs(
  ({ theme, size = Size.SMALL, onClick: identity }: LogoProps) => {
    const { primary } = theme.colors;
    const multiply = multiplier[size];
    const logo = theme.logo;
    return {
      ...logo,
      primaryColor: primary,
      height: logo.dimensions.height * multiply,
      width: logo.dimensions.width * multiply
    };
  }
)<LogoProps>`
  height: ${({ height }) => height}rem;
  width: ${({ width }) => width}rem;
  background: url(${({ svg }) => svg}) no-repeat top left;
  background-color: ${({ background }) => background};
  background-size: contain;

  box-sizing: border-box;
  &:hover {
    background-color: ${({ primaryColor }) => primaryColor};
  }
`;

export default Logo;

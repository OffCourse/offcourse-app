import React, { MouseEvent } from "react";
import styled from "styled-components";
import { identity } from "ramda";
import { Theme } from "types";
import { Variant, Size, ErrorState } from "enums";

type AvatarProps = {
  theme: Theme;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
  size?: Size;
  avatarType?: ErrorState | Variant.DEFAULT;
};

const multiplier = {
  [Size.SMALL]: 3,
  [Size.NORMAL]: 6,
  [Size.LARGE]: 10,
  [Size.EXTRA_LARGE]: 15
};

const Avatar = styled.div.attrs(
  ({
    theme,
    avatarType = Variant.DEFAULT,
    onClick = identity,
    size = Size.SMALL
  }: AvatarProps) => {
    const avatar = theme.avatars[avatarType];
    const multiply = multiplier[size];
    return {
      ...avatar,
      height: avatar.dimensions.height * multiply,
      width: avatar.dimensions.width * multiply
    };
  }
)<AvatarProps>`
  height: ${({ height }) => height}rem;
  width: ${({ width }) => width}rem;
  background: url(${({ svg }) => svg}) no-repeat top left;
  background-color: ${({ background }) => background};
  background-size: contain;
  box-sizing: border-box;
`;

export default Avatar;

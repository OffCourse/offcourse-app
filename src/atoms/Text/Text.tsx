import React from "react";
import styled from "styled-components";
import { Size } from "enums";
import { Theme } from "types";

type TextProps = {
  theme: Theme;
  size?: Size;
  children: string;
};

const textProps = {
  [Size.SMALL]: { fontSize: 0, lineHeight: 0 },
  [Size.NORMAL]: { fontSize: 1, lineHeight: 2 },
  [Size.LARGE]: { fontSize: 2, lineHeight: 3 },
  [Size.EXTRA_LARGE]: { fontSize: 3, lineHeight: 4 }
};

const Text = styled.p.attrs(
  ({ theme, size = Size.NORMAL, children }: TextProps) => {
    const { fontSize, lineHeight } = textProps[size];
    return {
      fontSize: theme.fontSizes[fontSize],
      lineHeight: theme.lineHeights[lineHeight],
      fontFamily: theme.fonts.base
    };
  }
)<TextProps>`
  margin: 0;
  padding: 0;
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize};
  line-height: ${({ lineHeight }) => lineHeight};
  word-break: break-word;
`;

export default Text;

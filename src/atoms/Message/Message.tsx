import React from "react";
import styled from "styled-components";
import { formatTitle } from "../helpers";
import { Variant } from "enums";
import { Theme } from "types";
import { variant as v } from "styled-system";

type MessageProps = {
  theme: Theme;
  variant?: Variant;
  children: string;
  isBasic?: boolean;
};

const Message = styled.div.attrs(
  ({
    theme,
    isBasic = false,
    variant = Variant.DEFAULT,
    children
  }: MessageProps) => {
    return {
      fontFamily: theme.fonts.base,
      minHeight: isBasic ? 0 : "2.25rem",
      padding: isBasic ? 0 : `${theme.space[4]} ${theme.space[6]}`,
      children: formatTitle(children),
      messageStyle: v({
        key: isBasic ? "signalColors" : "signalColorCombos"
      })
    };
  }
)<MessageProps>`
  ${({ messageStyle }) => messageStyle};
  box-sizing: border-box;
  display: flex;
  flex: 1;
  padding: ${({ padding }) => padding};
  user-select: none;
  font-family: ${({ fontFamily }) => fontFamily};
  min-height: ${({ minHeight }) => minHeight};
  span::after {
    content: ": ";
    white-space: pre;
  }
`;

export default Message;

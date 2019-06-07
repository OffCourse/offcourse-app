import styled from "styled-components";
import { Variant } from "enums";
import { Theme } from "types";
import { variant as v } from "styled-system";

const messageStyle = v({
  key: "signalColorCombos"
});
const basicMessageStyle = v({
  key: "signalColors"
});

type MessageWrapperProps = {
  theme: Theme;
  variant?: Variant;
  isBasic?: boolean;
};

const MessageWrapper = styled.div<MessageWrapperProps>`
  box-sizing: border-box;
  display: flex;
  flex: 1;
  padding: ${({ theme, isBasic }) =>
    `${theme.space[isBasic ? 0 : 4]} ${theme.space[6]} ${theme.space[4]} ${
      theme.space[6]
    }`};
  user-select: none;
  font-family: ${({ theme }) => theme.fonts.base};
  min-height: ${({ theme, isBasic }) => (isBasic ? 0 : "2.25rem")};
  span::after {
    content: ": ";
    white-space: pre;
  }
  ${({ isBasic }) => (isBasic ? basicMessageStyle : messageStyle)};
`;

export default MessageWrapper;

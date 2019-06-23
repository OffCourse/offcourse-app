import styled from "styled-components";
import { Icon, Label } from "atoms";
import { Theme } from "types";

type StatWrapperProps = {
  theme: Theme;
  isHorizontal: boolean;
  isNegative: boolean;
};

const StatWrapper = styled.div<StatWrapperProps>`
  display: flex;
  background-color: ${({ isNegative, theme }) =>
    isNegative ? theme.grayScale[4] : theme.grayScale[0]};
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.space[6]};
  flex-direction: ${({ isHorizontal }) => (isHorizontal ? "row" : "column")};
  ${Icon}, ${Label} {
    color: ${({ isNegative, theme }) =>
      isNegative ? theme.grayScale[0] : theme.grayScale[4]};
  }
  ${Icon} {
    margin-bottom: ${({ theme, isHorizontal }) =>
      isHorizontal ? theme.space[0] : theme.space[3]};
  }
  ${Label} {
    padding: 0
      ${({ theme, isHorizontal }) =>
        isHorizontal ? theme.space[4] : theme.space[0]};
  }
`;

export default StatWrapper;

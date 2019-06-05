import styled from "styled-components";
import { Direction, Size } from "enums";
import { Icon } from "atoms";
import { Theme } from "types";

type IconGroupProps = {
  theme: Theme;
  direction?: Direction;
  size?: Size;
};

const IconGroupWrapper = styled.div<IconGroupProps>`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === Direction.HORIZONTAL ? "row" : "column"};
  justify-content: ${({ direction }) =>
    direction === Direction.HORIZONTAL ? "flex-start" : "center"};

  align-items: center;
   ${Icon} {
    margin-right: ${({ theme, direction }) =>
      direction === Direction.HORIZONTAL ? theme.space[4] : 0};
    margin-bottom: ${({ theme, direction }) =>
      direction === Direction.HORIZONTAL ? theme.space[2] : theme.space[0]}

    &:last-child {
      margin-right: 0;
      margin-bottom: 0;
    }
  }
`;

export default IconGroupWrapper;

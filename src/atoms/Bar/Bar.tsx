import styled from "styled-components";
import { Variant, Direction } from "enums";
import { Theme } from "types";

type BarProps = {
  theme: Theme;
  width?: string;
  zIndex?: number;
  height?: string;
  direction?: Direction.HORIZONTAL | Direction.VERTICAL;
  variant?: Variant.NEGATIVE | Variant.DEFAULT;
};

const Bar = styled.div<BarProps>`
  display: flex;
  flex: 1;
  box-sizing: border-box;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme, variant }) =>
    variant === Variant.NEGATIVE ? theme.grayScale[4] : theme.grayScale[0]};
  color: ${({ theme, variant }) =>
    variant === Variant.NEGATIVE ? theme.grayScale[0] : theme.grayScale[4]};
  pointer-events: auto;
  &:hover {
    border-color: ${({ theme }) => theme.colors[Variant.INFO]};
  }
  height: ${({ direction }) =>
    direction === Direction.VERTICAL ? "100%" : "2.25rem"};
  width: ${({ direction }) =>
    direction === Direction.VERTICAL ? "30rem" : "100%"};
  z-index: 0;
`;

export default Bar;

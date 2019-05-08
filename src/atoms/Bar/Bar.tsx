import { width, height, zIndex } from "styled-system";
import styled from "styled-components";
import { Variant, Direction } from "enums";

const Bar: any = styled.div<{
  width: string;
  zIndex: number;
  height: string;
  direction: Direction;
  variant: Variant.NEGATIVE | Variant.DEFAULT;
}>`
  display: flex;
  flex: 1;
  box-sizing: border-box;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ variant }) =>
    variant === Variant.NEGATIVE ? "black" : "white"};
  color: ${({ variant }) => (variant === Variant.NEGATIVE ? "white" : "black")};
  pointer-events: auto;
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
  height: ${({ direction, height }) =>
    direction === Direction.HORIZONTAL ? height : "100%"};
  width: ${({ direction, width }) =>
    direction === Direction.VERTICAL ? width : "100%"};
  ${zIndex}
`;

Bar.defaultProps = {
  zIndex: 0,
  variant: Variant.NEGATIVE,
  height: "2.25rem",
  width: "30rem",
  direction: Direction.HORIZONTAL
};

export default Bar;

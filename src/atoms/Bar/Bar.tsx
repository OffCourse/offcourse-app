import { width, height, zIndex } from "styled-system";
import styled from "styled-components";
import { Variant, Direction } from "enums";
import { Theme } from "types";

type BarProps = {
  theme: Theme;
  width: string;
  zIndex: number;
  height: string;
  direction: Direction;
  variant: Variant.NEGATIVE | Variant.DEFAULT;
};

const Bar: any = styled.div.attrs(
  ({
    zIndex = 0,
    theme,
    height = "2.25rem",
    width = "30rem",
    variant = Variant.NEGATIVE,
    direction = Direction.HORIZONTAL
  }: BarProps) => {
    const { primary, black, white } = theme.colors;
    const [backgroundColor, textColor] =
      variant === Variant.NEGATIVE ? [black, white] : [white, black];
    const [w, h] =
      direction === Direction.HORIZONTAL ? ["100%", height] : [width, "100%"];
    return {
      primaryColor: primary,
      backgroundColor,
      textColor,
      height: h,
      width: w
    };
  }
)<BarProps>`
  display: flex;
  flex: 1;
  box-sizing: border-box;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ textColor }) => textColor};
  pointer-events: auto;
  &:hover {
    border-color: ${({ primaryColor }) => primaryColor};
  }
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  z-index: ${({ zIndex }) => zIndex};
`;

export default Bar;

import system from "system-components";
import styled from "styled-components";
import { width, space, opacity } from "styled-system";
import { Affordance, Direction } from "enums";
import { Theme, Card as CardType } from "types";
import Section from "../Section";

type CardProps = CardType & { theme: Theme; direction?: Direction };

const Card = styled.div.attrs(
  ({ theme, affordance, direction = Direction.Vertical }: CardProps) => {
    const [noBorder, _, normalBorder] = theme.borders;
    return {
      borderBottom:
        affordance === Affordance.SELECTABLE ? normalBorder : noBorder,
      background: theme.grayScale[0],
      borderColor: theme.grayScale[2],
      hoverBorderColor: theme.colors.primary,
      flexDirection: direction === Direction.HORIZONTAL ? "row" : "column"
    };
  }
)<CardProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: flex-start;
  align-items: flex-start;
  border-bottom: ${({ borderBottom }) => borderBottom};
  background: ${({ background }) => background};
  border-color: ${({ borderColor }) => borderColor};
  box-sizing: border-box;
  &:hover {
    border-color: ${({ hoverBorderColor }) => hoverBorderColor};
  }
  > ${Section} {
    &:first-child {
      border-top: none;
    }
  }
  ${width}
`;

Card.defaultProps = {
  affordance: Affordance.SELECTABLE,
  width: ["100%", "18rem", "18rem"]
};

export default Card;

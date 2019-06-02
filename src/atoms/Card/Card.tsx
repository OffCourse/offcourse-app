import system from "system-components";
import styled from "styled-components";
import { width, space, opacity } from "styled-system";
import { Affordance, Direction } from "enums";
import { Theme, Card as CardType } from "types";
import Section from "../Section";

type CardProps = CardType & { theme: Theme; direction?: Direction };

const Card = styled.div<CardProps>`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === Direction.HORIZONTAL ? "row" : "column"};
  justify-content: flex-start;
  align-items: flex-start;
  border-bottom: ${({ theme, affordance }) =>
    affordance === Affordance.SELECTABLE ? theme.borders[2] : theme.borders[0]};
  background: ${({ theme }) => theme.grayScale[0]};
  border-color: ${({ theme }) => theme.grayScale[2]};
  box-sizing: border-box;
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
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

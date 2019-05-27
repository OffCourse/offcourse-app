import system from "system-components";
import styled from "styled-components";
import { width, space, opacity } from "styled-system";
import { Affordance } from "enums";
import { Theme, Card as CardType } from "types";

type CardProps = CardType & { theme: Theme };

const Card = styled.div.attrs(({ theme, affordance }: CardProps) => {
  const [noBorder, _, normalBorder] = theme.borders;
  return {
    borderBottom:
      affordance === Affordance.SELECTABLE ? normalBorder : noBorder,
    background: theme.grayScale[0],
    borderColor: theme.grayScale[2],
    hoverBorderColor: theme.colors.primary
  };
})<CardProps>`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border-bottom: ${({ borderBottom }) => borderBottom};
  background: ${({ background }) => background};
  border-color: ${({ borderColor }) => borderColor};
  box-sizing: border-box;
  &:hover {
    border-color: ${({ hoverBorderColor }) => hoverBorderColor};
  }
  section {
    &:last-child {
      border-bottom: none;
    }
  }
  ${width}
`;

Card.defaultProps = {
  affordance: Affordance.SELECTABLE,
  width: ["100%", "18rem", "18rem"]
};

export default Card;

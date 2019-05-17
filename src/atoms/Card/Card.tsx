import system from "system-components";
import styled from "styled-components";
import { width, space, opacity } from "styled-system";
import { Affordance } from "enums";

const Card = styled.div<{
  affordance?: Affordance;
  width?: string | string[];
}>`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border-bottom: ${({ theme, affordance }) =>
    affordance === Affordance.SELECTABLE ? theme.borders[2] : "none"};
  background: ${({ theme }) => theme.colors.grayScale[0]};
  border-color: ${({ theme }) => theme.colors.grayScale[2]};
  box-sizing: border-box;
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
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

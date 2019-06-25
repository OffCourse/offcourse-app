import styled from "styled-components";
import { animated, useSpring, config } from "react-spring";
import { Variant, Affordance, Direction } from "enums";
import { Card, Section } from "atoms";
import { Theme } from "types";
import { width, space, opacity } from "styled-system";

type FancyCardWrapperProps = {
  affordance?: Affordance.EXPANDABLE | Affordance.SELECTABLE | Affordance.NONE;
  width: string[];
  theme: Theme;
  style: any;
};

const FancyCardWrapper = styled(animated.div)<FancyCardWrapperProps>`
  border-bottom: ${({ theme, affordance }) =>
    affordance === Affordance.SELECTABLE ? theme.borders[2] : theme.borders[0]};
  border-color: ${({ theme }) => theme.grayScale[2]};
  overflow: hidden;
  ${width};
`;

export default FancyCardWrapper;

import React, { FunctionComponent, forwardRef } from "react";
import system from "system-components";
import { animated, useSpring, config } from "react-spring";
import styled from "styled-components";
import { width, space, opacity } from "styled-system";
import { Affordance, Direction } from "enums";
import { Theme, Card as CardType } from "types";
import Section from "../Section";

type CardProps = CardType & {
  children: any;
  theme: Theme;
  className?: string;
  direction?: Direction;
};

const CardWrapper = styled.div<CardProps>`
  display: flex;
  box-sizing: border-box;
  background: ${({ theme }) => theme.grayScale[0]};
  border-color: ${({ theme }) => theme.grayScale[2]};
  border-bottom: ${({ theme, affordance }) =>
    affordance === Affordance.SELECTABLE ? theme.borders[2] : theme.borders[0]};
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
  ${width};
`;

const InnerCard = styled.div<CardProps>`
  display: flex;
  overflow: hidden;
  flex-direction: ${({ direction }) =>
    direction === Direction.HORIZONTAL ? "row" : "column"};
  justify-content: flex-start;
  align-items: stretch;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  flex: 1;
  > ${Section}:first-child, div:first-child ${Section} {
    border-top: none;
  }
`;

const Card = forwardRef(
  (
    {
      affordance = Affordance.NONE,
      width = ["100%", "18rem", "18rem"],
      direction = Direction.VERTICAL,
      className,
      children
    }: CardProps,
    ref: any
  ) => {
    return (
      <CardWrapper
        className={className}
        direction={direction}
        width={width}
        affordance={affordance}
      >
        <InnerCard direction={direction} ref={ref}>
          {children}
        </InnerCard>
      </CardWrapper>
    );
  }
);

export default styled(Card)``;

import React, { FunctionComponent } from "react";
import { useTransition, animated } from "react-spring";
import { Card as BasicCard, Section } from "atoms";
import { Variant, Affordance, Direction } from "enums";
import { Card as CardType, Section as SectionType } from "types";
import { useExpandable } from "hooks";
import styled from "styled-components";

const Card = styled(BasicCard)`
  > * {
    &:first-child {
      > ${Section} {
        border-top: none;
      }
    }
  }
`;

type CardProps = {
  affordance?: Affordance.EXPANDABLE | Affordance.SELECTABLE | Affordance.NONE;
  variant?: Variant;
  initialLevel?: number;
  layout?: string[][];
  children: SectionType | SectionType[];
  onCardResize?: (opts: { level?: number; sectionNames?: string[] }) => void;
};

const ExpandableCard: FunctionComponent<CardProps> = ({
  affordance = Affordance.EXPANDABLE,
  variant = Variant.DEFAULT,
  layout = [],
  initialLevel,
  children,
  onCardResize: callback
}) => {
  const isExpandable = affordance === Affordance.EXPANDABLE;
  const isDisabled = variant === Variant.DISABLED;
  const { level, sections, cycle } = useExpandable({
    initialLevel,
    layout,
    sections: children,
    callback
  });

  const transitions = useTransition(sections, section => section.key, {
    from: { opacity: 0, transform: "translate3d(-40px,0, 0)" },
    enter: { opacity: 1, transform: "translate3d(0px,0, 0)" },
    leave: { opacity: 0, transform: "translate3d(-40px,0, 0)" }
  }).map(({ item, props, key }) => {
    return (
      <animated.div key={key} style={props}>
        {item}
      </animated.div>
    );
  });

  return (
    <Card affordance={isExpandable ? Affordance.SELECTABLE : Affordance.NONE}>
      {transitions}
    </Card>
  );
};

export default ExpandableCard;

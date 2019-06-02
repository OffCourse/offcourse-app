import React, { FunctionComponent } from "react";
import { Variant, Affordance, Direction } from "enums";
import { animated, useSpring, config } from "react-spring";
import { map, contains, flatten } from "ramda";

import { Section } from "types";
import { Card } from "atoms";
import { useMeasure } from "hooks";
import FancyCardWrapper from "./FancyCardWrapper";
import FancySection from "./FancySection";

type CardProps = {
  affordance?: Affordance.EXPANDABLE | Affordance.SELECTABLE | Affordance.NONE;
  variant?: Variant;
  children: Section | Section[];
  onCardResize?: (opts: any) => void;
  level: number;
  layout: string[][];
};

const FancyCard: FunctionComponent<CardProps> = ({
  affordance = Affordance.EXPANDABLE,
  variant = Variant.DEFAULT,
  level,
  layout,
  children
}) => {
  const isExpandable = affordance === Affordance.EXPANDABLE;
  const isDisabled = variant === Variant.DISABLED;
  const sectionNames = layout[level] || [];
  const sectionsArray = flatten([children]);

  const [ref, { height }] = useMeasure();

  const visibleSections = map(
    item => {
      const { name } = item.props;
      const isVisible = contains(name, sectionNames);

      return (
        <FancySection name={name} isVisible={isVisible}>
          {item}
        </FancySection>
      );
    },
    sectionsArray as Section[]
  );

  return (
    <FancyCardWrapper
      as={animated.div}
      style={{
        ...useSpring({ height, config: config.gentle })
      }}
      affordance={isExpandable ? Affordance.SELECTABLE : Affordance.NONE}
    >
      <div ref={ref}>{isDisabled ? visibleSections[0] : visibleSections}</div>
    </FancyCardWrapper>
  );
};

export default FancyCard;

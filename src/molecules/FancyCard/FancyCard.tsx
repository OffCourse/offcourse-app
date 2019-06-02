import React, { FunctionComponent } from "react";
import { Variant, Affordance, Direction } from "enums";
import { animated, useSpring, config } from "react-spring";
import { map, contains, flatten, isEmpty, isNil } from "ramda";

import { Section } from "types";
import { Card } from "atoms";
import { useMeasure } from "hooks";
import FancyCardWrapper from "./FancyCardWrapper";
import FancySection from "./FancySection";

type CardProps = {
  affordance?: Affordance.EXPANDABLE | Affordance.SELECTABLE | Affordance.NONE;
  variant?: Variant;
  children: Section | Section[];
  level?: number;
  layout?: string[][];
};

const FancyCard: FunctionComponent<CardProps> = ({
  affordance = Affordance.EXPANDABLE,
  variant = Variant.DEFAULT,
  level,
  layout = [],
  children
}) => {
  const isDisabled = variant === Variant.DISABLED;
  const sectionsArray = flatten([children]);
  const isExpandable = affordance === Affordance.EXPANDABLE;

  if (isDisabled) {
    return <Card affordance={Affordance.NONE}>{sectionsArray[0]}</Card>;
  }

  if (!isExpandable || isNil(level) || isEmpty(layout)) {
    return <Card affordance={Affordance.SELECTABLE}>{sectionsArray}</Card>;
  }

  const [ref, { height }] = useMeasure();

  const createSection = (item: Section) => {
    const { name } = item.props;
    const sectionNames = layout[level];
    const isVisible = contains(name, sectionNames);

    return (
      <FancySection key={name} isVisible={isVisible}>
        {item}
      </FancySection>
    );
  };

  return (
    <FancyCardWrapper
      as={animated.div}
      style={{
        ...useSpring({ height, config: config.gentle })
      }}
      affordance={Affordance.SELECTABLE}
    >
      <div ref={ref}>{map(createSection, sectionsArray as Section[])}</div>
    </FancyCardWrapper>
  );
};

export default FancyCard;

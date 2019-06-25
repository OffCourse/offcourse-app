import React, { FunctionComponent } from "react";
import { Variant, Affordance, Direction } from "enums";
import { animated, useSpring, config } from "react-spring";
import { map, contains, flatten, isEmpty, isNil } from "ramda";

import { Section } from "types";
import { Card } from "atoms";
import { useMeasure } from "hooks";
import FancySection from "./FancySection";
import styled from "styled-components";
import FancyCardWrapper from "./FancyCardWrapper";

type FancyCardProps = {
  affordance?: Affordance.EXPANDABLE | Affordance.SELECTABLE | Affordance.NONE;
  variant?: Variant;
  children: Section | Section[];
  width: string[];
  level?: number;
  layout?: string[][];
};

const FancyCard: FunctionComponent<FancyCardProps> = ({
  affordance = Affordance.EXPANDABLE,
  variant = Variant.DEFAULT,
  level,
  width = ["100%", "18rem", "18rem"],
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
  const styles = useSpring({ height, config: config.gentle });

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
      affordance={Affordance.SELECTABLE}
      width={width}
      style={{
        ...styles
      }}
    >
      <Card ref={ref}>{map(createSection, sectionsArray as Section[])}</Card>
    </FancyCardWrapper>
  );
};

export default FancyCard;

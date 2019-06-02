import React, { FunctionComponent } from "react";
import { Variant, Affordance, Direction } from "enums";
import { Section } from "types";
import { useExpandable } from "hooks";
import FancyCardWrapper from "./FancyCardWrapper";

type CardProps = {
  affordance?: Affordance.EXPANDABLE | Affordance.SELECTABLE | Affordance.NONE;
  variant?: Variant;
  children: Section | Section[];
  onCardResize?: (opts: any) => void;
  level: number;
  layout: string[][];
};

const ExpandableCard: FunctionComponent<CardProps> = ({
  affordance = Affordance.EXPANDABLE,
  variant = Variant.DEFAULT,
  level,
  layout,
  children: sections
}) => {
  const isExpandable = affordance === Affordance.EXPANDABLE;
  const isDisabled = variant === Variant.DISABLED;

  const visibleSections = useExpandable({
    sections,
    isDisabled,
    level,
    layout
  });

  return (
    <FancyCardWrapper
      affordance={isExpandable ? Affordance.SELECTABLE : Affordance.NONE}
    >
      {visibleSections}
    </FancyCardWrapper>
  );
};

export default FancyCardWrapper;

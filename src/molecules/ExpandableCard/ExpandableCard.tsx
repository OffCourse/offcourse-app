import React, {
  Fragment,
  useState,
  useEffect,
  useCallback,
  FunctionComponent,
  ReactElement,
  Children,
  cloneElement
} from "react";
import posed, { PoseGroup } from "react-pose";
import styled from "styled-components";
import { Card, Text, Section, SectionType, Button } from "atoms";
import { identity, isEmpty, contains, isNil, omit } from "ramda";
import { Variant, Affordance, Direction } from "enums";
import { Card as CardType } from "types";
import { useExpandable } from "hooks";

const AnimSection = posed(Section)({
  visible: {
    opacity: ({ isVisible }) => (isVisible ? 1 : 0),
    height: ({ isVisible }) => (isVisible ? "auto" : 0)
  },
  invisible: {
    opacity: ({ isVisible }) => (isVisible ? 1 : 0),
    height: ({ isVisible }) => (isVisible ? "auto" : 0)
  }
});

const AnimCard = posed(Card)({
  visible: { staggerChildren: 300 },
  invisible: { staggerChildren: 300, staggerDirection: -1 }
});

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
  const [on, setOn] = useState(false);
  const isDisabled = variant === Variant.DISABLED;
  const { level, sections, cycle } = useExpandable({
    initialLevel,
    layout,
    sections: children,
    callback
  });

  console.log("0", level);

  useEffect(() => {
    console.log("1", level);
    setOn(!on);
  }, [level]);

  return (
    <AnimCard
      pose={on ? "invisible" : "visible"}
      affordance={isExpandable ? Affordance.SELECTABLE : Affordance.NONE}
    >
      {sections.map(({ props }, index) => {
        const { name, ...rest } = props;
        return <AnimSection key={name} {...rest} />;
      })}
    </AnimCard>
  );
};

export default ExpandableCard;

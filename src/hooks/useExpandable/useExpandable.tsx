import React, { cloneElement, ReactElement } from "react";
import { map, find, propEq, flatten } from "ramda";
import { useTransition, animated } from "react-spring";
import { Section } from "types";

type useExpandable = (opts: {
  level: number;
  layout: string[][];
  isDisabled: boolean;
  sections: Section | Section[];
}) => ReactElement | ReactElement[];

const useExpandable: useExpandable = ({
  level = 0,
  layout = [],
  isDisabled = false,
  sections
}) => {
  const sectionNames = layout[level] || [];
  const sectionsArray = flatten([sections]);

  if (isDisabled) {
    return sectionsArray[0];
  }

  const items = map(sectionName => {
    return find(propEq("key", sectionName))(sectionsArray);
  }, sectionNames);

  const visibleSections = useTransition(
    items as { key: string }[],
    item => item.key,
    {
      from: { opacity: 0, transform: "translate3d(-40px,0, 0)" },
      enter: { opacity: 1, transform: "translate3d(0px,0, 0)" },
      leave: { opacity: 0, transform: "translate3d(100%,0, 0)" }
    }
  ).map(({ item, props, key }) => {
    return (
      <animated.div key={key} style={props}>
        {item}
      </animated.div>
    );
  });

  return visibleSections;
};

export default useExpandable;

import React, { FunctionComponent } from "react";
import { animated, useSpring, config } from "react-spring";
import { Section } from "types";

type SectionProps = {
  children: Section;
  isVisible: boolean;
};

const FancySection: FunctionComponent<SectionProps> = ({
  children,
  isVisible
}) => (
  <animated.div
    style={{
      visibility: isVisible ? "visible" : "hidden",
      height: isVisible ? "auto" : 0,
      ...useSpring({
        opacity: isVisible ? 1 : 0,
        config: config.molasses
      })
    }}
  >
    {children}
  </animated.div>
);

export default FancySection;

import React, { useCallback, useState, useRef, Fragment } from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { map, values, identity, equals } from "ramda";
import { DocContainer as Container } from "helpers";

import useExpandable from "./useExpandable";
import useCount from "../useCount";
import { Card, Button, Icon, Heading, Section, Text } from "atoms";
import { Direction, Affordance, Size, ErrorState } from "enums";

storiesOf("Hooks|useExpandable", module)
  .addDecorator(withKnobs)
  .add("selectable by default", () => {
    const Component = () => {
      const layout = [["a"], ["a", "b"]];
      const maxCount = layout.length > 0 ? layout.length - 1 : 0;
      const { count: level, cycle } = useCount({ maxCount });
      const sections = [
        <Section key="a" direction={Direction.VERTICAL}>
          <Text>Show Something</Text>
        </Section>,
        <Section key="b" direction={Direction.VERTICAL}>
          <Text>{`Current Level: ${level}`}</Text>
        </Section>
      ];

      const visibleSections = useExpandable({
        level,
        layout,
        sections
      });
      return <Card onClick={cycle}>{visibleSections}</Card>;
    };
    return <Component />;
  });

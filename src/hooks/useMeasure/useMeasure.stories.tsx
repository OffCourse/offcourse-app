import React, { useCallback, useState, Fragment } from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { map, values, identity, equals } from "ramda";
import { DocContainer as Container } from "helpers";

import useMeasure from "../useMeasure";
import { Card, Button, Icon, Heading, Section, Text } from "atoms";
import { Direction, Affordance, Size, Variant } from "enums";

storiesOf("Hooks|useMeasure", module)
  .addDecorator(withKnobs)
  .add("selectable by default", () => {
    const Component = () => {
      const [ref, { width, height, top, bottom }] = useMeasure();
      return (
        <Card width={"30vw"} ref={ref}>
          <Section direction={Direction.VERTICAL}>
            <Text>Hello World</Text>
          </Section>
          <Section direction={Direction.VERTICAL}>
            <Text>{`Width: ${width}`}</Text>
            <Text>{`Height: ${height}`}</Text>
            <Text>{`Top: ${top}`}</Text>
            <Text>{`Bottom: ${bottom}`}</Text>
          </Section>
        </Card>
      );
    };
    return <Component />;
  });

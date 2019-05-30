import React, { useCallback, useState, useRef, Fragment } from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { map, values, identity, equals } from "ramda";
import { DocContainer as Container } from "helpers";

import useCount from "./useCount";
import { Card, Button, Icon, Heading, Section, Text } from "atoms";
import { Direction, Affordance, Size, Variant } from "enums";

storiesOf("Hooks|useCount", module)
  .addDecorator(withKnobs)
  .add("selectable by default", () => {
    const Component = () => {
      const { count, changeCount, increase, decrease } = useCount(2, 5);
      return (
        <Card>
          <Section direction={Direction.VERTICAL}>
            <Text>{`Current Count: ${count}`}</Text>
          </Section>
          <Section direction={Direction.VERTICAL}>
            <Button onClick={changeCount}>Change Count</Button>
            <Button
              variant={increase ? Variant.DEFAULT : Variant.DISABLED}
              onClick={increase}
            >
              Increase
            </Button>
            <Button
              variant={decrease ? Variant.DEFAULT : Variant.DISABLED}
              onClick={decrease}
            >
              Decrease
            </Button>
          </Section>
        </Card>
      );
    };
    return <Component />;
  });

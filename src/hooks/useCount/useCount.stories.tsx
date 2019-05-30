import React, { useCallback, useState, Fragment } from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { map, values, identity, equals } from "ramda";
import { DocContainer as Container } from "helpers";

import useCount from "./useCount";
import useToggle from "../useToggle";
import { Card, Button, Icon, Heading, Section, Text } from "atoms";
import { CheckItem } from "molecules";
import { Direction, Affordance, Size, Variant } from "enums";

storiesOf("Hooks|useCount", module)
  .addDecorator(withKnobs)
  .add("selectable by default", () => {
    const Component = () => {
      const [direction, setDirection] = useState(Direction.UP);
      const { count, cycle, increase, decrease, reset } = useCount({
        direction
      });

      const handleToggle = useCallback(() => {
        setDirection(
          direction === Direction.DOWN ? Direction.UP : Direction.DOWN
        );
      }, [direction]);

      return (
        <Card>
          <Section direction={Direction.VERTICAL}>
            <Text>{`Current Count: ${count}`}</Text>
          </Section>
          <Section direction={Direction.VERTICAL}>
            <Button
              onClick={cycle}
            >{`Cycle ${direction.toLowerCase()}`}</Button>
            <Button onClick={increase}>Increase</Button>
            <Button onClick={decrease}>Decrease</Button>
            <Button onClick={reset}>reset</Button>
          </Section>
          <Section>
            <CheckItem onToggle={handleToggle}>Toggle Direction</CheckItem>
          </Section>
        </Card>
      );
    };
    return <Component />;
  });

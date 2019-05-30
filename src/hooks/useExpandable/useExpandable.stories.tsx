import React, { useCallback, useState, useRef, Fragment } from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { map, values, identity, equals } from "ramda";
import { DocContainer as Container } from "helpers";

import useExpandable from "./useExpandable";
import { Card, Button, Icon, Heading, Section, Text } from "atoms";
import { Direction, Affordance, Size, ErrorState } from "enums";

storiesOf("Hooks|useExpandable", module)
  .addDecorator(withKnobs)
  .add("selectable by default", () => {
    const Component = () => {
      const { level, visibleSections, cycle } = useExpandable({
        layout: [["HI"], ["Hello"], ["Bye Bye"]]
      });
      return (
        <Card>
          <Section direction={Direction.VERTICAL}>
            <Text>{`Current Level: ${level}`}</Text>
            <Text>{`Visible Sections: ${visibleSections.join(" ")}`}</Text>
          </Section>
          <Section direction={Direction.VERTICAL}>
            <Button onClick={cycle}>Change Level</Button>
          </Section>
        </Card>
      );
    };
    return <Component />;
  });

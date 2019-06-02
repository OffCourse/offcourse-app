import React, { useCallback, useState, useRef, Fragment } from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { map, values, identity, equals } from "ramda";
import { DocContainer as Container } from "helpers";

import Card from "./FancyCard";
import { Card as BasicCard, Button, Icon, Heading, Section, Text } from "atoms";
import { Direction, Variant, Affordance, Size, ErrorState } from "enums";
import { useCount, useExpandable } from "hooks";

const Debug = () => {
  const layout = [
    ["heading"],
    ["heading", "stats"],
    ["heading", "stats", "body", "else"]
  ];

  const maxCount = layout.length > 0 ? layout.length - 1 : 0;
  const { count: level, cycle } = useCount({
    maxCount
  });

  return (
    <Card layout={layout} level={level}>
      <Section key="heading" direction={Direction.HORIZONTAL}>
        <Heading>Hello World</Heading>
        <Button variant={Variant.POSITIVE} onClick={cycle}>
          Resize
        </Button>
      </Section>
      <Section key="stats" direction={Direction.VERTICAL}>
        <Text>{`Current Level: ${level}`}</Text>
      </Section>
      <Section key="body">
        <Heading>How Are You?</Heading>
      </Section>
      <Section key="else">
        <Heading>And You?</Heading>
      </Section>
    </Card>
  );
};

storiesOf("Molecules|ExpandableCard", module)
  .addDecorator(withKnobs)
  .add("selectable by default", () => {
    return <Debug />;
  })
  .add("can be turned off", () => {
    return (
      <Card
        affordance={Affordance.NONE}
        layout={[["heading"], ["heading", "body"]]}
      >
        <Section section="heading">
          <Heading>Hello World</Heading>
        </Section>
        <Section section="body">
          <Heading>How Are You?</Heading>
        </Section>
      </Card>
    );
  });

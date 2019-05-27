import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { map, values, identity } from "ramda";
import { DocContainer as Container } from "helpers";

import Card from "./ExpandableCard";
import { Icon, Heading, Section } from "atoms";
import { Direction, Affordance, Size, ErrorState } from "enums";

const ResizeButton = ({ onIconClick }) => (
  <Section section="heading">
    <Heading>Hello World</Heading>
    {onIconClick && (
      <Icon
        name="hamburger"
        onClick={onIconClick}
        onDoubleClick={onIconClick}
      />
    )}
  </Section>
);

storiesOf("Molecules|ExpandableCard", module)
  .addDecorator(withKnobs)
  .add("selectable by default", () => {
    return (
      <Card layout={[["heading"], ["heading", "body"]]}>
        <ResizeButton section="heading" />
        <Section section="body">
          <Heading>How Are You?</Heading>
        </Section>
      </Card>
    );
  })
  .add("can be turned off", () => {
    return (
      <Card
        affordance={Affordance.NONE}
        layout={[["heading"], ["heading", "body"]]}
      >
        <ResizeButton section="heading" />
        <Section section="body">
          <Heading>How Are You?</Heading>
        </Section>
      </Card>
    );
  });

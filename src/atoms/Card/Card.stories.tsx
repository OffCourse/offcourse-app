import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { map, values } from "ramda";
import { DocContainer as Container } from "helpers";

import Card from "./Card";
import Heading from "../Heading";
import Section from "../Section";
import { Direction, Affordance, Size, ErrorState } from "enums";

storiesOf("Atoms|Card", module)
  .addDecorator(withKnobs)
  .add("selectable by default", () => {
    return (
      <Card>
        <Section>
          <Heading>Hello World</Heading>
        </Section>
      </Card>
    );
  })
  .add("can be turned off", () => {
    return (
      <Card affordance={Affordance.NONE}>
        <Heading>Hello World</Heading>
      </Card>
    );
  })
  .add("horizontal", () => {
    return (
      <Card width="36rem" direction={Direction.HORIZONTAL}>
        <Section>
          <Heading>Hello World</Heading>
        </Section>
        <Section>
          <Heading>Hello World</Heading>
        </Section>
      </Card>
    );
  });

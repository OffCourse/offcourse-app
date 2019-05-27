import React, { Fragment } from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { map, values } from "ramda";
import { Section, Text } from "atoms";

import { Direction, Variant, Size, ErrorState } from "enums";

storiesOf("Atoms|Section", module)
  .addDecorator(withKnobs)
  .add("horizontal", () => {
    return (
      <Section>
        {map(
          text => (
            <Text key={text}>{text}</Text>
          ),
          ["Hello There", "Where is Everyone...?", "Anyone Here?????"]
        )}
      </Section>
    );
  })
  .add("vertical", () => {
    return (
      <Section direction={Direction.VERTICAL}>
        {map(
          text => (
            <Text key={text}>{text}</Text>
          ),
          ["Hello There", "Where is Everyone...?", "Anyone Here?????"]
        )}
      </Section>
    );
  });

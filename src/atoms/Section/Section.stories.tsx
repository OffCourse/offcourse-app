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
  .add("display text", () => {
    return (
      <Fragment>
        {map(
          text => (
            <Section key={text}>
              <Text>{text}</Text>
            </Section>
          ),
          ["Hello There", "Where is Everyone...?", "Anyone Here?????"]
        )}
      </Fragment>
    );
  });

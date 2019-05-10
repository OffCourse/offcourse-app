import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { map, values, keys } from "ramda";

import Group from "./Group";
import Heading from "../Heading";
import { Size, Direction } from "enums";

storiesOf("Atoms|Group", module)
  .addDecorator(withKnobs)
  .add("horizontal orientation", () => {
    const label = text("Label", "HELLO");
    return (
      <Group>
        {map(
          size => (
            <Heading key={size} size={size}>
              {label}
            </Heading>
          ),
          [Size.SMALL, Size.NORMAL, Size.LARGE, Size.EXTRA_LARGE]
        )}
      </Group>
    );
  })
  .add("vertical orientation", () => {
    const label = text("Label", "HELLO");
    return (
      <Group direction={Direction.VERTICAL}>
        {map(
          size => (
            <Heading key={size} size={size}>
              {label}
            </Heading>
          ),
          [Size.SMALL, Size.NORMAL, Size.LARGE, Size.EXTRA_LARGE]
        )}
      </Group>
    );
  });

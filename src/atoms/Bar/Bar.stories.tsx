import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { map, values } from "ramda";

import Bar from "./Bar";
import { Variant, Direction } from "enums";

storiesOf("Bar", module)
  .addDecorator(withKnobs)
  .add("different directions", () => {
    const label = text("Label", "Hello");
    return (
      <Fragment>
        {map(
          direction => (
            <div key={direction} style={{ height: "300px" }}>
              <Bar direction={direction}>{label}</Bar>
            </div>
          ),
          [Direction.HORIZONTAL, Direction.VERTICAL]
        )}
      </Fragment>
    );
  })
  .add("different variants", () => {
    const label = text("Label", "Hello");
    return (
      <Fragment>
        {map(
          variant => (
            <Bar key={variant} variant={variant}>
              {label}
            </Bar>
          ),
          [Variant.NEGATIVE, Variant.DEFAULT]
        )}
      </Fragment>
    );
  });

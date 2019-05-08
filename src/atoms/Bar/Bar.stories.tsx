import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { map, values } from "ramda";

import Bar from "./Bar";
import { Variant, Direction } from "enums";

storiesOf("Bar", module)
  .addDecorator(withKnobs)
  .add("different directions", () => (
    <Fragment>
      {map(
        direction => (
          <div key={direction} style={{ height: "300px" }}>
            <Bar direction={direction} />
          </div>
        ),
        [Direction.HORIZONTAL, Direction.VERTICAL]
      )}
    </Fragment>
  ))
  .add("different variants", () => (
    <Fragment>
      {map(
        variant => (
          <Bar key={variant} variant={variant} />
        ),
        [Variant.NEGATIVE, Variant.DEFAULT]
      )}
    </Fragment>
  ));

import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { map, values, keys } from "ramda";

import Heading from "./Heading";
import { Size, Variant } from "enums";

storiesOf("Atoms|Heading", module)
  .addDecorator(withKnobs)
  .add("different sizes", () => {
    const label = text("Label", "HELLO");
    return (
      <Fragment>
        {map(
          size => (
            <Heading key={size} size={size}>
              {label}
            </Heading>
          ),
          [Size.SMALL, Size.NORMAL, Size.LARGE, Size.EXTRA_LARGE]
        )}
      </Fragment>
    );
  })
  .add("different variants", () => {
    const label = text("Label", "HELLO");
    return (
      <Fragment>
        {map(
          variant => (
            <Heading key={variant} variant={variant} href="bla">
              {label}
            </Heading>
          ),
          [Variant.DEFAULT, Variant.DISABLED]
        )}
      </Fragment>
    );
  });

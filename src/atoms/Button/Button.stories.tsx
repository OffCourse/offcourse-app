import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { map, values } from "ramda";

import Button from "./Button";
import { Direction, Variant, Size } from "enums";

storiesOf("Atoms|Button", module)
  .addDecorator(withKnobs)
  .add("different variants", () => {
    const label = text("Label", "Hello");
    return (
      <Fragment>
        {map(
          variant => (
            <Button
              key={variant}
              size={Size.NORMAL}
              variant={variant}
              onClick={action("clicked")}
            >
              {label}
            </Button>
          ),
          values(Variant)
        )}
      </Fragment>
    );
  })
  .add("different sizes", () => {
    const label = text("Label", "Hello");
    return (
      <Fragment>
        {map(
          size => (
            <Button
              key={size}
              size={size}
              variant={Variant.WARNING}
              onClick={action("clicked")}
            >
              {label}
            </Button>
          ),
          values(Size)
        )}
      </Fragment>
    );
  })
  .add("works with links", () => {
    const label = text("Label", "Hello");
    return (
      <Fragment>
        {map(
          size => (
            <Button
              key={size}
              size={size}
              variant={Variant.POSITIVE}
              href="https://offcourse.io"
            >
              {label}
            </Button>
          ),
          values(Size)
        )}
      </Fragment>
    );
  })
  .add("playground", () => {
    const label = text("Label", "Hello");
    const size = select("Size", values(Size), Size.NORMAL);
    const variant = select("Variant", values(Variant), Variant.DEFAULT);
    return (
      <Button size={size} variant={variant} onClick={action("clicked")}>
        {label}
      </Button>
    );
  });

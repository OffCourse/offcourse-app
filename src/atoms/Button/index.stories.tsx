import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import Button from "./Button";

import { Variant, Size } from "enums";

const { SMALL, NORMAL, LARGE } = Size;
const { DEFAULT, DISABLED, INFO, POSITIVE, WARNING, NEGATIVE } = Variant;

storiesOf("Button", module)
  .addDecorator(withKnobs)
  .add("with text", () => {
    const name = text("Name", "Button", "name");
    const size = select("Size", [SMALL, NORMAL, LARGE], NORMAL, "Size");
    const variant = select(
      "Variant",
      [DEFAULT, DISABLED, INFO, POSITIVE, WARNING, NEGATIVE],
      INFO,
      "Variant"
    );

    return (
      <Button
        size={size}
        variant={variant}
        onClick={action("clicked")}
      >{`Hello ${name}`}</Button>
    );
  });

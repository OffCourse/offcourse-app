import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { sizes, variants } from "constants";

import { Welcome } from "@storybook/react/demo";
import { Button } from "atoms";

const { SMALL, NORMAL, LARGE } = sizes;
const { DEFAULT, DISABLED, INFO, POSITIVE, WARNING, NEGATIVE } = variants;

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

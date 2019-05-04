import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import Button from "./Button";

import { Variant, Size } from "enums";

const { SMALL, NORMAL, LARGE } = Size;
const { DEFAULT, DISABLED, INFO, POSITIVE, WARNING, NEGATIVE } = Variant;

storiesOf("Button", module).add("with text", () => {
  return (
    <Button
      size={SMALL}
      variant={DEFAULT}
      onClick={action("clicked")}
    >{`Hello SIR`}</Button>
  );
});

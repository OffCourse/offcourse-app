import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import Backdrop from "./Backdrop";

import { Variant, Size } from "enums";

const { SMALL, NORMAL, LARGE } = Size;
const { DEFAULT, DISABLED, INFO, POSITIVE, WARNING, NEGATIVE } = Variant;

storiesOf("Backdrop", module)
  .addDecorator(withKnobs)
  .add("with text", () => {
    return <Backdrop>HELLO</Backdrop>;
  });

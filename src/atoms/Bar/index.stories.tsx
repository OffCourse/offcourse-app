import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import Bar from "./Bar";

import { Variant, Size } from "../enums";

const { SMALL, NORMAL, LARGE } = Size;
const { DEFAULT, DISABLED, INFO, POSITIVE, WARNING, NEGATIVE } = Variant;

storiesOf("Bar", module)
  .addDecorator(withKnobs)
  .add("with text", () => {
    return <Bar bg="black">>HELLO</Bar>;
  });

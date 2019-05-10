import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { map, values, keys } from "ramda";

import Heading from "./Heading";
import { Size } from "enums";

storiesOf("Atoms|Heading", module)
  .addDecorator(withKnobs)
  .add("normal size", () => <Heading href="bla">HELLO</Heading>);

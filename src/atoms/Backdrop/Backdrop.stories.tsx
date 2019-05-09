import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";

import Backdrop from "./Backdrop";
import { Variant, Direction } from "enums";

storiesOf("Atoms|Backdrop", module)
  .addDecorator(withKnobs)
  .add("different directions", () => <Backdrop />);

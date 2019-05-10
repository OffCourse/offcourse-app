import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { map, values } from "ramda";

import Checkbox from "./Checkbox";
import { Direction, Variant, Size } from "enums";

storiesOf("Atoms|Checkbox", module)
  .addDecorator(withKnobs)
  .add("off by default", () => <Checkbox onToggle={action("toggled")} />)
  .add("on", () => <Checkbox isChecked={true} onToggle={action("toggled")} />)
  .add("large", () => (
    <Checkbox size={Size.LARGE} isChecked={true} onToggle={action("toggled")} />
  ));

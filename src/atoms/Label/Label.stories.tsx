import React, { Fragment } from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { map, values } from "ramda";

import Label from "./Label";
import { Direction, Variant, Size, ErrorState } from "enums";

storiesOf("Atoms|Label", module)
  .addDecorator(withKnobs)
  .add("A Label", () => <Label>Hello World</Label>);

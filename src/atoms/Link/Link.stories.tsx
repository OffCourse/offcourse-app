import React, { Fragment } from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { map, values } from "ramda";

import Link from "./Link";
import { Direction, Variant, Size, ErrorState } from "enums";

storiesOf("Atoms|Link", module)
  .addDecorator(withKnobs)
  .add("small", () => (
    <Link size={Size.SMALL} href="slksdflad">
      Hello World
    </Link>
  ))
  .add("normal", () => (
    <Link size={Size.NORMAL} href="slksdflad">
      Hello World
    </Link>
  ))
  .add("large", () => (
    <Link size={Size.LARGE} href="slksdflad">
      Hello World
    </Link>
  ))
  .add("Basic", () => (
    <Link isBasic size={Size.NORMAL} href="slksdflad">
      Hello World
    </Link>
  ))
  .add("Active", () => (
    <Link isActive size={Size.NORMAL} href="slksdflad">
      Hello World
    </Link>
  ))
  .add("Disabled", () => (
    <Link isDisabled size={Size.NORMAL} href="slksdflad">
      Hello World
    </Link>
  ));

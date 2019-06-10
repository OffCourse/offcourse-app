import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { map, values } from "ramda";
import { DocContainer as Container } from "helpers";

import PasswordInput from "./PasswordInput";
import { Variant, Direction, Affordance, Size, ErrorState } from "enums";

storiesOf("Molecules|PasswordInput", module)
  .addDecorator(withKnobs)
  .add("password input", () => {
    const placeholder = "Enter your password";
    return (
      <PasswordInput
        onChange={action("changed")}
        name="password"
        placeholder={placeholder}
      />
    );
  })
  .add("disabled password input", () => {
    const placeholder = "Enter your password";
    return (
      <PasswordInput
        onChange={action("changed")}
        variant={Variant.DISABLED}
        name="password"
        placeholder={placeholder}
      />
    );
  });

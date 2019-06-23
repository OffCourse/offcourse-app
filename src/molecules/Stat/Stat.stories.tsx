import React, { Fragment } from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { map, values } from "ramda";

import Stat from "./Stat";
import { Direction, Variant, Size, ErrorState } from "enums";

storiesOf("Molecules|Stat", module)
  .addDecorator(withKnobs)
  .add("default", () => {
    return <Stat label="beginner" iconName="beginner" />;
  })
  .add("vertical direction", () => {
    return (
      <Stat
        direction={Direction.VERTICAL}
        label="beginner"
        iconName="beginner"
      />
    );
  })
  .add("negative variant", () => {
    return (
      <Stat variant={Variant.NEGATIVE} label="beginner" iconName="beginner" />
    );
  })
  .add("negative variant vertical", () => {
    return (
      <Stat
        direction={Direction.VERTICAL}
        variant={Variant.NEGATIVE}
        label="beginner"
        iconName="beginner"
      />
    );
  });

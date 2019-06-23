import React, { Fragment } from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { map, values } from "ramda";

import StatGroup from "./StatGroup";
import { Direction, Variant, Size, ErrorState } from "enums";

storiesOf("Molecules|StatGroup", module)
  .addDecorator(withKnobs)
  .add("default", () => {
    const stats = [
      { label: "beginner", iconName: "beginner" },
      { label: "advanced", iconName: "advanced" },
      { label: "expert", iconName: "expert" }
    ];
    return <StatGroup stats={stats} />;
  })
  .add("negative", () => {
    const stats = [
      { label: "beginner", iconName: "beginner" },
      { label: "advanced", iconName: "advanced" },
      { label: "expert", iconName: "expert" }
    ];
    return (
      <StatGroup
        direction={Direction.VERTICAL}
        variant={Variant.NEGATIVE}
        stats={stats}
      />
    );
  });

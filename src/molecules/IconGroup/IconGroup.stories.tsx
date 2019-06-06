import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { map, values } from "ramda";
import { DocContainer as Container } from "helpers";

import IconGroup from "./IconGroup";
import { Direction, Variant, Affordance, Size, ErrorState } from "enums";
const icons = [
  { name: "hamburger" },
  { name: "rocket", variant: Variant.NEGATIVE },
  { name: "video", variant: Variant.WARNING },
  { name: "twitter" },
  { name: "document", variant: Variant.POSITIVE }
];

storiesOf("Molecules|IconGroup", module)
  .addDecorator(withKnobs)
  .add("horizontal by default", () => {
    return <IconGroup icons={icons} />;
  })
  .add("vertical mode", () => {
    return <IconGroup direction={Direction.VERTICAL} icons={icons} />;
  })
  .add("large size", () => {
    return <IconGroup size={Size.LARGE} icons={icons} />;
  });

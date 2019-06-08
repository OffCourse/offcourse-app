import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { map, values } from "ramda";
import { DocContainer as Container } from "helpers";

import LinkGroup from "./LinkGroup";
import { Direction, Variant, Affordance, Size, ErrorState } from "enums";
const links = [
  { title: "hamburger" },
  { title: "rocket", variant: Variant.NEGATIVE },
  { title: "video", variant: Variant.WARNING },
  { title: "twitter" },
  { title: "document", variant: Variant.POSITIVE }
];

storiesOf("Molecules|LinkGroup", module)
  .addDecorator(withKnobs)
  .add("horizontal by default", () => {
    return <LinkGroup links={links} />;
  })
  .add("vertical mode", () => {
    return <LinkGroup direction={Direction.VERTICAL} links={links} />;
  });

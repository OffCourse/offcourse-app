import React, { Fragment } from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { map, values, identity } from "ramda";

import ListItem from "./ListItem";
import { Direction, Variant, Size, ErrorState } from "enums";

storiesOf("Atoms|ListItem", module)
  .addDecorator(withKnobs)
  .add("just text", () => {
    return <ListItem>Hello text</ListItem>;
  })
  .add("as link", () => {
    return <ListItem href="./jsdfdjklfs">Hello link</ListItem>;
  })
  .add("as button", () => {
    return <ListItem onClick={identity}>Hello button</ListItem>;
  });

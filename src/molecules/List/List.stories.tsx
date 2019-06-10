import React, { Fragment } from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { map, values, identity } from "ramda";

import List from "./List";
import { ListItem } from "atoms";
import { Direction, Variant, Size, ErrorState } from "enums";

storiesOf("Molecules|List", module)
  .addDecorator(withKnobs)
  .add("just a wrapper", () => {
    return (
      <List>
        <ListItem>Hello text</ListItem>
        <ListItem>Hello text</ListItem>
        <ListItem href="./jsdfdjklfs">Hello link</ListItem>
        <ListItem>Hello text</ListItem>
        <ListItem onClick={identity}>Hello button</ListItem>
        <ListItem>Hello text</ListItem>
      </List>
    );
  });

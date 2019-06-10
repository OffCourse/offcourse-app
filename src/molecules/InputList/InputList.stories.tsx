import React, { Fragment } from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { map, values, identity } from "ramda";

import InputList from "./InputList";
import { ListItem } from "atoms";
import { Direction, Variant, Size, ErrorState } from "enums";

storiesOf("Molecules|InputList", module)
  .addDecorator(withKnobs)
  .add("just a wrapper", () => {
    return (
      <InputList>
        <ListItem name="a">Hello text</ListItem>
        <ListItem name="b">Hello text</ListItem>
        <ListItem name="c" href="./jsdfdjklfs">
          Hello link
        </ListItem>
        <ListItem name="d" onClick={identity}>
          Hello button
        </ListItem>
      </InputList>
    );
  });

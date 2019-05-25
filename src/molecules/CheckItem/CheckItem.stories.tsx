import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { identity } from "ramda";
import { Breadcrumb } from "types";

import CheckItem from "./CheckItem";

storiesOf("Molecules|CheckItem", module)
  .addDecorator(withKnobs)
  .add("defaults to an empty trail and display none", () => {
    return <CheckItem />;
  })
  .add("with an array of crumbs", () => {
    const onClick = identity;
    const trail = [
      { text: "hello world", onClick },
      { text: "where are you?", onClick }
    ];
    return <CheckItem trail={trail} />;
  });

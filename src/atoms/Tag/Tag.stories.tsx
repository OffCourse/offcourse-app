import React, { Fragment } from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { map, values } from "ramda";

import Tag from "./Tag";
import { Direction, Variant, Size, ErrorState } from "enums";

storiesOf("Atoms|Tag", module)
  .addDecorator(withKnobs)
  .add("display text", () => {
    return <Tag>Hello World</Tag>;
  });

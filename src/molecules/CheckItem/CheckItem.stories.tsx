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
  .add("without link", () => {
    return <CheckItem isChecked={true}>Do Something</CheckItem>;
  })
  .add("with link", () => {
    return <CheckItem href="/fsdajlsdfkl">Do Something</CheckItem>;
  });

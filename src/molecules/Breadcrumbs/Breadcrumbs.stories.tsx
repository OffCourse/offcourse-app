import React, { Fragment } from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { map, values } from "ramda";

import Breadcrumbs from "./Breadcrumbs";
import { Direction, Variant, Size, ErrorState } from "enums";

storiesOf("Molecules|Breadcrumbs", module)
  .addDecorator(withKnobs)
  .add("display text", () => {
    const breadcrumbs = [{ text: "Hello" }, { text: "World" }];
    return <Breadcrumbs breadcrumbs={breadcrumbs} />;
  });

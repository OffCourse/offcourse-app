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
    const FieldComponent = ListItem;
    const Component = () => {
      const items = [
        { id: "abc", title: "hello" },
        { id: "bcd", title: "word" }
      ];
      // const [order, reorder] = useReorder(["a", "b", "c", "d"]);
      return <InputList onReorder={console.log} items={items} />;
    };
    return <Component />;
  });

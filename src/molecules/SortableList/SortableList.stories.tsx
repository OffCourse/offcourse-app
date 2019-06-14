import React, { Fragment } from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { map, values, identity } from "ramda";

import SortableList from "./SortableList";
import { ListItem } from "atoms";
import { useReorder } from "hooks";
import { Direction, Variant, Size, ErrorState } from "enums";

storiesOf("Molecules|SortableList", module)
  .addDecorator(withKnobs)
  .add("just a wrapper", () => {
    const Component = () => {
      const [order, reorder] = useReorder(["a", "b", "c", "d"]);
      return (
        <SortableList order={order} reorder={reorder}>
          <ListItem key="a">Hello text</ListItem>
          <ListItem key="b">Hello text</ListItem>
          <ListItem key="c" href="./jsdfdjklfs">
            Hello link
          </ListItem>
          <ListItem key="d" onClick={identity}>
            Hello button
          </ListItem>
        </SortableList>
      );
    };
    return <Component />;
  });

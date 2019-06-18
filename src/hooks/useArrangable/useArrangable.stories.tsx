import React, { Fragment } from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { map, values, identity } from "ramda";

import { ListItem } from "atoms";
import { SortableList } from "molecules";
import { Direction, Variant, Size, ErrorState } from "enums";
import useArrangable from "./useArrangable";

storiesOf("Hooks|UseArrangable", module)
  .addDecorator(withKnobs)
  .add("just a wrapper", () => {
    const Component = () => {
      const items = [
        { id: "a", title: "hello world" },
        { id: "b", title: "sello world" },
        { id: "c", title: "ello world" }
      ];
      const [arrangedItems, arrangeItems] = useArrangable(items);
      return (
        <SortableList reorder={arrangeItems}>
          {arrangedItems.map(({ id, title }) => (
            <ListItem key={id}>{title}</ListItem>
          ))}
        </SortableList>
      );
    };
    return <Component />;
  });

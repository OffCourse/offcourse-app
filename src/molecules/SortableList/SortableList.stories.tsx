import React, { Fragment } from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { map, values, identity } from "ramda";

import MultiInput from "../MultiInput";
import SortableList from "./SortableList";
import { ListItem, Input } from "atoms";
import { useArrangable } from "hooks";
import { Direction, Variant, Size, ErrorState } from "enums";

storiesOf("Molecules|SortableList", module)
  .addDecorator(withKnobs)
  .add("normal items", () => {
    const Component = () => {
      const items = [
        { id: "a", title: "hello world" },
        { id: "b", title: "sello world" },
        { id: "c", title: "ello world" }
      ];
      const [arrangedItems, operations] = useArrangable(items);
      return (
        <SortableList operations={operations}>
          {arrangedItems.map(({ id, title }) => (
            <ListItem key={id}>{title}</ListItem>
          ))}
        </SortableList>
      );
    };
    return <Component />;
  })
  .add("simple inputs", () => {
    const Component = () => {
      const items = ["hello", "word"];
      const [arrangedItems, operations] = useArrangable(items);
      return (
        <SortableList hasControls operations={operations}>
          {arrangedItems.map((item, index) => (
            <Input value={item} key={index} name={`${name}.${index}`} />
          ))}
        </SortableList>
      );
    };
    return <Component />;
  })
  .add("complex inputs", () => {
    const Component = () => {
      const items = [
        { publisher: "xyz", author: "abc", title: "hello" },
        { author: "bcd", title: "word" },
        { author: "scd", title: "word" },
        { publisher: "xxxz", author: "abc", title: "hello" }
      ];
      const [arrangedItems, operations] = useArrangable(items);
      return (
        <SortableList hasControls operations={operations}>
          {arrangedItems.map((item, index) => (
            <MultiInput
              fields={["title", "publisher", "author"]}
              value={item}
              key={index}
              name={`${name}.${index}`}
            />
          ))}
        </SortableList>
      );
    };
    return <Component />;
  });

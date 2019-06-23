import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { map, values } from "ramda";
import { DocContainer as Container } from "helpers";

import { Tag } from "atoms";
import TagGroup from "./TagGroup";
import { Direction, Variant, Affordance, Size, ErrorState } from "enums";
const tags = [
  "Prosciutto",
  "Short Ribs",
  "Pork",
  "Spicy",
  "Jalapeno",
  "Tri-Tip",
  "Jowl"
];

storiesOf("Molecules|TagGroup", module)
  .addDecorator(withKnobs)
  .add("default", () => {
    return <TagGroup tags={tags} />;
  })
  .add("explicit", () => {
    return (
      <TagGroup>
        <Tag>Spicy</Tag>
        <Tag>Jalapeno</Tag>
        <Tag>Tri-Tip</Tag>
        <Tag>Jowl</Tag>
        <Tag>Prosciutto</Tag>
        <Tag>Short Ribs</Tag>
        <Tag>Pork</Tag>
        <Tag>Ribeye</Tag>
        <Tag>Tenderloin</Tag>
        <Tag>Porchetta</Tag>
        <Tag>Jowl</Tag>
        <Tag>Prosciutto</Tag>
        <Tag>Short Ribs</Tag>
        <Tag>Pork</Tag>
        <Tag>Ribeye</Tag>
        <Tag>Landjaeger</Tag>
        <Tag>Fatback</Tag>
        <Tag>Spicy</Tag>
        <Tag>Jalapeno</Tag>
        <Tag>Tri-Tip</Tag>
        <Tag>Tenderloin</Tag>
        <Tag>Porchetta</Tag>
        <Tag>Landjaeger</Tag>
        <Tag>Fatback</Tag>
      </TagGroup>
    );
  });

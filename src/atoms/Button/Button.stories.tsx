import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { map, values } from "ramda";

import Button from "./Button";
import { Variant, Size } from "enums";

enum Direction {
  HORIZONTAL = "HORIZONTAL",
  VERTICAL = "VERTICAL"
}

const Container = styled.div<{
  direction: Direction;
}>`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === Direction.HORIZONTAL ? "row" : "column"};
  margin-top: 2rem;
  margin-right: 2rem;
  & > * {
    margin-left: 2rem;
    margin-bottom: 2rem;
  }
`;

storiesOf("Button", module)
  .addDecorator(withKnobs)
  .add("different variants", () => {
    const label = text("Label", "Hello");
    return (
      <Container direction={Direction.HORIZONTAL}>
        {map(
          variant => (
            <Button
              key={variant}
              size={Size.NORMAL}
              variant={variant}
              onClick={action("clicked")}
            >
              {label}
            </Button>
          ),
          values(Variant)
        )}
      </Container>
    );
  })
  .add("different sizes", () => {
    const label = text("Label", "Hello");
    return (
      <Container direction={Direction.VERTICAL}>
        {map(
          size => (
            <Button
              key={size}
              size={size}
              variant={Variant.WARNING}
              onClick={action("clicked")}
            >
              {label}
            </Button>
          ),
          values(Size)
        )}
      </Container>
    );
  })
  .add("playground", () => {
    const label = text("Label", "Hello");
    const size = select("Size", values(Size), Size.NORMAL);
    const variant = select("Variant", values(Variant), Variant.DEFAULT);
    return (
      <Container direction={Direction.VERTICAL}>
        <Button size={size} variant={variant} onClick={action("clicked")}>
          {label}
        </Button>
      </Container>
    );
  });

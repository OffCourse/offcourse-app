import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { identity } from "ramda";
import { Breadcrumb } from "types";
import { Direction, Variant } from "enums";

import { Button } from "atoms";
import ButtonGroup from "./ButtonGroup";

storiesOf("Molecules|ButtonGroup", module)
  .addDecorator(withKnobs)
  .add("functions as a mere wrapper without a buttons prop", () => {
    return (
      <ButtonGroup>
        <Button>Hello</Button>
        <Button>Hello</Button>
        <Button>Hello</Button>
        <Button>Hello</Button>
        <Button>Hello</Button>
      </ButtonGroup>
    );
  })
  .add("can be initialized with a series of buttons", () => {
    const onClick = identity;
    const buttons = [
      { title: "hello world", onClick },
      { title: "where are you?", onClick }
    ];
    return <ButtonGroup variant={Variant.POSITIVE} buttons={buttons} />;
  })
  .add("can be displayed vertically", () => {
    const onClick = identity;
    const buttons = [
      { title: "hello world", onClick },
      { title: "where are you?", onClick }
    ];
    return <ButtonGroup direction={Direction.VERTICAL} buttons={buttons} />;
  });

import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { identity } from "ramda";
import { Breadcrumb } from "types";
import { Direction, Variant } from "enums";

import { Message } from "atoms";
import MessageGroup from "./MessageGroup";

storiesOf("Molecules|MessageGroup", module)
  .addDecorator(withKnobs)
  .add("functions as a mere wrapper without a messages prop", () => {
    return (
      <MessageGroup>
        <Message>Hello</Message>
        <Message>Hello</Message>
        <Message variant={Variant.NEGATIVE}>Hello</Message>
        <Message>Hello</Message>
        <Message>Hello</Message>
      </MessageGroup>
    );
  })
  .add("can be initialized with a series of messages", () => {
    const messages = [
      { message: "hello world" },
      { message: "where are you?", variant: Variant.NEGATIVE }
    ];
    return <MessageGroup messages={messages} />;
  })
  .add("can be basic messages", () => {
    const messages = [
      { message: "hello world" },
      { message: "where are you?", variant: Variant.NEGATIVE }
    ];
    return <MessageGroup isBasic messages={messages} />;
  });

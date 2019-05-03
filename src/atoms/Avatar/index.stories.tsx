import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { Size, ErrorStates } from "../enums";
import Avatar from "./Avatar";

const { SMALL, NORMAL, LARGE } = Size;

const {
  DEFAULT,
  RESOURCE_NOT_LOADING,
  TOTAL_PANIC,
  NO_SEARCH_RESULTS,
  COURSE_NOT_FOUND,
  CHECKPOINT_NOT_FOUND
} = ErrorStates;

storiesOf("Avatar", module)
  .addDecorator(withKnobs)
  .add("with text", () => {
    const variant = select(
      "Variant",
      [
        DEFAULT,
        RESOURCE_NOT_LOADING,
        TOTAL_PANIC,
        NO_SEARCH_RESULTS,
        COURSE_NOT_FOUND,
        CHECKPOINT_NOT_FOUND
      ],
      DEFAULT,
      "Variant"
    );
    return <Avatar onClick={action("clicked")} variant={variant} />;
  });

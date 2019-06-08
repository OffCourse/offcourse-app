import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { map, values } from "ramda";
import { DocContainer as Container } from "helpers";

import { Icon } from "atoms";
import InputField from "./InputField";
import { Direction, Variant, Size, ErrorState } from "enums";

storiesOf("Molecules|InputField", module)
  .addDecorator(withKnobs)
  .add("text input", () => {
    const placeholder = "Enter your name";
    return (
      <InputField
        onChange={action("changed")}
        title="normal"
        name="normal"
        placeholder={placeholder}
      />
    );
  })
  .add("disabled text input", () => {
    const placeholder = "Enter your name";
    return (
      <InputField
        onChange={action("changed")}
        variant={Variant.DISABLED}
        title="normal"
        name="normal"
        value="HELLO"
        placeholder={placeholder}
      />
    );
  })
  .add("text input with errors", () => {
    const placeholder = "Enter your name";
    const errors = ["something went wrong", "terribly wrong"];
    return (
      <InputField
        onChange={action("changed")}
        onBlur={action("blurred")}
        title="normal"
        name="normal"
        value="HELLO"
        placeholder={placeholder}
        errors={errors}
      />
    );
  })
  .add("with icons", () => {
    const placeholder = "Enter some text";
    const errors = ["something went wrong", "terribly wrong"];
    return (
      <InputField
        onChange={action("changed")}
        onBlur={action("blurred")}
        title="normal"
        name="normal"
        value="HELLO"
        placeholder={placeholder}
        errors={errors}
      >
        <Icon name="hamburger" />
      </InputField>
    );
  })
  .add("small", () => {
    const placeholder = "Enter some text";
    return (
      <InputField
        size={Size.SMALL}
        onChange={action("changed")}
        onBlur={action("blurred")}
        name="normal"
        value="HELLO"
        placeholder={placeholder}
      >
        <Icon name="hamburger" />
      </InputField>
    );
  })
  .add("textArea", () => {
    const placeholder = "Enter some text";
    return (
      <InputField
        isTextArea={true}
        onChange={action("changed")}
        onBlur={action("blurred")}
        name="normal"
        value="HELLO"
        placeholder={placeholder}
      >
        <Icon name="hamburger" />
      </InputField>
    );
  });

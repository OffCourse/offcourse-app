import React, { useState } from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { map, values } from "ramda";
import { DocContainer as Container } from "helpers";

import Icon from "../Icon";
import Input from "./Input";
import { Direction, Affordance, Size, ErrorState } from "enums";

storiesOf("Atoms|Input", module)
  .addDecorator(withKnobs)
  .add("text input", () => {
    const placeholder = "Enter your name";
    return <Input name="normal" placeholder={placeholder} />;
  })
  .add("wit normalization", () => {
    const placeholder = "Enter your name";
    const Component = () => {
      const [value, setValue] = useState("");
      return (
        <Input
          name="normal"
          onChange={({ target }) => setValue(target.value)}
          value={value}
          placeholder={placeholder}
        />
      );
    };

    return <Component />;
  })
  .add("without normalization", () => {
    const placeholder = "Enter your name";
    const Component = () => {
      const [value, setValue] = useState("");
      return (
        <Input
          isNormalized={false}
          name="normal"
          onChange={({ target }) => setValue(target.value)}
          value={value}
          placeholder={placeholder}
        />
      );
    };

    return <Component />;
  })
  .add("password input", () => {
    const placeholder = "Enter your password";
    return (
      <Input name="password" inputType="password" placeholder={placeholder} />
    );
  })
  .add("with errors", () => {
    const placeholder = "correct your mistake";
    return <Input name="errors" hasErrors placeholder={placeholder} />;
  })
  .add("textarea", () => {
    const placeholder = "Enter some text";
    return <Input name="textarea" isTextArea placeholder={placeholder} />;
  })
  .add("with icons", () => {
    const placeholder = "Enter some text";
    return (
      <Input name="textarea" placeholder={placeholder}>
        <Icon name="hamburger" />
      </Input>
    );
  });

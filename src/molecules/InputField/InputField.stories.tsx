import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { map, values } from "ramda";
import { DocContainer as Container } from "helpers";

import InputField from "./InputField";
import { Direction, Variant, Size, ErrorState } from "enums";

storiesOf("Molecules|InputField", module)
  .addDecorator(withKnobs)
  .add("text input", () => {
    const placeholder = "Enter your name";
    return (
      <InputField title="normal" name="normal" placeholder={placeholder} />
    );
  })
  .add("disabled text input", () => {
    const placeholder = "Enter your name";
    return (
      <InputField
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
    const errors = ["something"];
    return (
      <InputField
        title="normal"
        name="normal"
        value="HELLO"
        placeholder={placeholder}
        errors={errors}
      />
    );
  });
// .add("password input", () => {
//   const placeholder = "Enter your password";
//   return (
//     <Input name="password" inputType="password" placeholder={placeholder} />
//   );
// })
// .add("with errors", () => {
//   const placeholder = "correct your mistake";
//   return <Input name="errors" hasErrors placeholder={placeholder} />;
// })
// .add("textarea", () => {
//   const placeholder = "Enter some text";
//   return <Input name="textarea" isTextArea placeholder={placeholder} />;
// })
// .add("with icons", () => {
//   const placeholder = "Enter some text";
//   return (
//     <Input name="textarea" placeholder={placeholder}>
//       <Icon name="hamburger" />
//     </Input>
//   );
// });

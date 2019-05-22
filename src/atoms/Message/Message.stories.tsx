import React, { Fragment } from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { map, values } from "ramda";

import Message from "./Message";
import { Direction, Variant, Size, ErrorState } from "enums";

storiesOf("Atoms|Message", module)
  .addDecorator(withKnobs)
  .add("different variants", () => {
    return (
      <Fragment>
        {map(
          variant => (
            <Message key={variant} variant={variant}>
              Hello
            </Message>
          ),
          values(Variant)
        )}
      </Fragment>
    );
  })
  .add("basic flavor", () => {
    return (
      <Fragment>
        {map(
          variant => (
            <Message isBasic key={variant} variant={variant}>
              Hello
            </Message>
          ),
          values(Variant)
        )}
      </Fragment>
    );
  });

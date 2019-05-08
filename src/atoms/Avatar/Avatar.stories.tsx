import React, { Fragment } from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { map, values } from "ramda";

import Avatar from "./Avatar";
import { Direction, Variant, Size, ErrorState } from "enums";

storiesOf("Atoms|Avatar", module)
  .addDecorator(withKnobs)
  .add("different error states", () => {
    return (
      <Fragment>
        {map(
          error => (
            <Avatar key={error} error={error} />
          ),
          values(ErrorState)
        )}
      </Fragment>
    );
  })
  .add("different sizes", () => {
    return (
      <Fragment>
        {map(
          size => (
            <Avatar key={size} size={size} />
          ),
          Object.values(Size)
        )}
      </Fragment>
    );
  })
  .add("playground", () => {
    const size = select("Size", values(Size), Size.NORMAL);
    const variant = select("Errors", values(ErrorState), ErrorState.NONE);
    return <Avatar error={variant} size={size} />;
  });

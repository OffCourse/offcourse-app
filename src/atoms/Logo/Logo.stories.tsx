import React, { Fragment } from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { map, values } from "ramda";

import Logo from "./Logo";
import { Direction, Variant, Size, ErrorState } from "enums";

storiesOf("Atoms|Logo", module)
  .addDecorator(withKnobs)
  .add("different sizes", () => {
    return (
      <Fragment>
        {map(
          size => (
            <Logo key={size} size={size} />
          ),
          Object.values(Size)
        )}
      </Fragment>
    );
  })
  .add("playground", () => {
    const size = select("Size", values(Size), Size.NORMAL);
    return <Logo size={size} />;
  });

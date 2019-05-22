import React, { Fragment } from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { map, values } from "ramda";

import Text from "./Text";
import { Direction, Variant, Size, ErrorState } from "enums";

storiesOf("Atoms|Text", module)
  .addDecorator(withKnobs)
  .add("display text", () => {
    return (
      <Fragment>
        {map(
          size => (
            <Text key={size} size={size}>
              Hello World
            </Text>
          ),
          values(Size)
        )}
      </Fragment>
    );
  });

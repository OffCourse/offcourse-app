import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { map, values, keys } from "ramda";
import * as icons from "./icons";

import Icon from "./Icon";
import { Size, Variant } from "enums";

storiesOf("Atoms|Icon", module)
  .addDecorator(withKnobs)
  .add("normal size", () => (
    <div>
      {map(
        name => (
          <Icon key={name} name={name} onClick={action("click")} />
        ),
        keys(icons)
      )}
    </div>
  ))
  .add("large size", () => (
    <div>
      {map(
        name => (
          <Icon
            key={name}
            size={Size.LARGE}
            name={name}
            onClick={action("click")}
          />
        ),
        keys(icons)
      )}
    </div>
  ))
  .add("colors", () => (
    <div>
      {map(
        variant => (
          <Icon
            key={variant}
            size={Size.LARGE}
            variant={variant}
            name="hamburger"
            onClick={action("click")}
          />
        ),
        keys(Variant)
      )}
    </div>
  ));

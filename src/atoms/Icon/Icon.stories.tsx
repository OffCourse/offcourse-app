import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { map, values, keys} from "ramda";
import * as icons from "./icons";

import Icon from "./Icon";
import { Size } from "enums";

storiesOf("Atoms|Icon", module)
  .addDecorator(withKnobs)
  .add("normal size", () =>(
    <Fragment>
      {map((name) => <Icon  mx={4} key={name} name={name} onClick={action("click")} />, keys(icons))}
    </Fragment>))
  .add("large size", () =>(
    <Fragment>
      {map((name) => <Icon  mx={4} key={name} size={Size.LARGE} name={name} onClick={action("click")} />, keys(icons))}
    </Fragment>))

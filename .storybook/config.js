import { configure } from "@storybook/react";
import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { withInfo } from "@storybook/addon-info";
import * as themes from "themes";

addDecorator(withInfo); // Globally in your .storybook/config.js.
addDecorator(withThemesProvider(Object.values(themes)));

const req = require.context("../src", true, /\.stories\.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

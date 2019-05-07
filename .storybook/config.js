import { configure } from "@storybook/react";
import React from "react";
import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { withInfo } from "@storybook/addon-info";
import { offcourse } from "themes";

//import { withThemesProvider } from "storybook-addon-styled-component-theme";

addDecorator(story => (
  <ThemeProvider theme={offcourse}>{story()}</ThemeProvider>
));

addDecorator(withInfo({ inline: true })); // Globally in your .storybook/config.js.
// addDecorator(withThemesProvider(Object.values(themes)));

const req = require.context("../src", true, /\.stories\.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

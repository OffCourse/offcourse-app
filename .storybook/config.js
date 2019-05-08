import { configure } from "@storybook/react";
import React, { Fragment } from "react";
import { addDecorator } from "@storybook/react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { withInfo } from "@storybook/addon-info";
import { offcourse } from "themes";

//import { withThemesProvider } from "storybook-addon-styled-component-theme";

addDecorator(
  withInfo({ inline: true, propsTablesExclude: [GlobalStyle, ThemeProvider] })
);
const GlobalStyle = createGlobalStyle(offcourse);
addDecorator(story => (
  <ThemeProvider theme={offcourse}>{story()}</ThemeProvider>
));

const req = require.context("../src", true, /\.stories\.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

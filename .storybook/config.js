import React from "react";
import { configure, addParameters, addDecorator } from "@storybook/react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { withInfo } from "@storybook/addon-info";
import { offcourse } from "themes";

//import { withThemesProvider } from "storybook-addon-styled-component-theme";
addParameters({
  backgrounds: [
    { name: "light", value: "#f4f6f4", default: true },
    { name: "medium", value: "#C8CAC9" },
    { name: "dark", value: "#797B7A" }
  ]
});

addDecorator(
  withInfo({ inline: false, propsTablesExclude: [GlobalStyle, ThemeProvider] })
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

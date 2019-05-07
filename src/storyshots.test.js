import initStoryshots from "@storybook/addon-storyshots";
import React from "react";
import "jest-styled-components";

jest.mock("@storybook/addon-info", () => ({
  withInfo: () => story => story(),
  setDefaults: () => {}
}));

jest.mock("storybook-addon-styled-component-theme", () => ({
  withThemesProvider: () => story => story()
}));

initStoryshots({
  framework: "react"
});

import initStoryshots from "@storybook/addon-storyshots";
import Enzyme, { mount } from "enzyme";
import { identity } from "ramda";
import { createSerializer } from "enzyme-to-json";
import React from "react";
import 'jest-styled-components'

jest.mock("@storybook/addon-info", () => ({
  withInfo: () => story => story(),
  setDefaults: () => {}
}));

import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

initStoryshots({
  framework: "react"
});

import initStoryshots from "@storybook/addon-storyshots";
import Enzyme, { mount } from "enzyme";
import { createSerializer } from "enzyme-to-json";

import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

initStoryshots({
  framework: "react",
  renderer: mount,
  snapshotSerializers: [createSerializer()]
});

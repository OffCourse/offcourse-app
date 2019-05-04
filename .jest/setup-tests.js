jest.mock("@storybook/addon-info", () => ({
  withInfo: () => storyFn => storyFn,
  setDefaults: () => {}
}));

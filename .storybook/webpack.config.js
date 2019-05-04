// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

const path = require("path");
const custom = require("../webpack.common.js");

const typescriptWithDocs = {
  test: /\.tsx?$/,
  include: path.resolve(__dirname, "../src"),
  use: [
    require.resolve("babel-loader"),
    require.resolve("react-docgen-typescript-loader")
  ]
};

module.exports = async ({ config, mode }) => {
  return {
    ...config,
    resolve: { ...config.resolve, ...custom.resolve },
    module: {
      ...config.module,
      rules: [...custom.module.rules, typescriptWithDocs]
    }
  };
};

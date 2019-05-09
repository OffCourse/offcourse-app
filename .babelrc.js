module.exports = api => {
  // Testing if babel is being run in test mode
  const isTest = api.env("test");
  /**
   * Cache the returned value forever and don't call this function again. This is the default behavior but since we
   * are reading the env value above, we need to explicitly set it after we are done doing that, else we get a
   * caching was left unconfigured error.
   */
  api.cache(true);
  return {
    env: {
      test: {
        plugins: ["require-context-hook"]
      }
    },
    presets: [
      // For transformation of JSX and other react related bable plugins
      "@babel/preset-react",
      // Enabling Babel to understand TypeSFcript
      "@babel/preset-typescript",
      [
        // Allows smart transpilation according to target environments
        "@babel/preset-env",
        {
          useBuiltIns: "usage",
          corejs: 3,
          modules: isTest ? "commonjs" : false
        }
      ]
    ],
    plugins: [
      "@babel/plugin-syntax-dynamic-import",
      "react-hot-loader/babel",
      "@babel/plugin-proposal-class-properties",
      [
        "babel-plugin-styled-components",
        {
          displayName: true,
          preprocess: false
        }
      ]
    ]
  };
};

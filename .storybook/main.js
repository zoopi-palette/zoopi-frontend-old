module.exports = {
  "stories": [
    "../**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  // ref: https://github.com/storybookjs/storybook/issues/7540#issuecomment-797495306
  webpackFinal: async (config) => {
    config.module.rules[0].use[0].options.presets = [
      require.resolve('@babel/preset-env'),
      require.resolve('@babel/preset-typescript'),
      [
        require.resolve('@babel/preset-react'),
        {
          runtime: 'automatic',
          importSource: '@emotion/react',
        },
      ],
    ]

    config.module.rules[0].use[0].options.plugins = [
      ...config.module.rules[0].use[0].options.plugins,
      '@emotion/babel-plugin',
    ]

    // ref: https://stackoverflow.com/a/61706308/11681543
    const fileLoaderRule = config.module.rules.find(rule => rule.test && rule.test.test('.svg'));
    fileLoaderRule.exclude = /\.svg$/;  

    config.module.rules.push({
      test: /\.svg$/,
      enforce: "pre",
      use: [{
        // because storybook support webpack 5, we can't use latest version of @svgr/webpack. so using @svgr/webpack@5.5.0 
        loader: "@svgr/webpack",
        options: {
          // ref: https://stackoverflow.com/a/71127131/11681543
          svgoConfig: {
            plugins: [
              {removeViewBox: false},
            ],
          },
        },
      }],
    });

    return config
  },
}
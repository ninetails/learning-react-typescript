const { join } = require("path");

module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    include: [join(__dirname, '../src')],
      use: [
        {
          loader: require.resolve('awesome-typescript-loader'),
          options: {
            configFileName: './.storybook/tsconfig.json'
          }
        },
        { loader: require.resolve('react-docgen-typescript-loader') }
      ]
  });

  config.resolve.extensions.push('.ts', '.tsx');

  return config
}

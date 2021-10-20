// typescript webpack.config.js https://webpack.js.org/guides/typescript/
const path = require('path');
const webpack = require('webpack'); // https://stackoverflow.com/questions/31592819/referenceerror-webpack-is-not-defined

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    filename: 'main.ts',
    path: path.resolve(__dirname, 'dist'),
  }, 
  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }],
  },
  resolve: {
    root: [
      path.resolve(__dirname, '../node_modules'),
      path.resolve(__dirname, '../src'),
    ],
    alias: {
      "jquery-ui": "jquery-ui/jquery-ui.js",
      modules: path.join(__dirname, "node_modules"),
      'jquery-ui-dist': 'jquery-ui-dist/jquery-ui.js',
      Utilities: path.resolve(__dirname, 'src/utilities/'),
      Templates: path.resolve(__dirname, 'src/templates/'),
    },
    extensions: ['', '.ts','.js', '.json'],
  },plugins: [
    new webpack.ProvidePlugin({
      "$":"jquery",
      "jQuery":"jquery",
      "window.jQuery":"jquery"
    })
  ]
};
HtmlWebpackPlugin = require('html-webpack-plugin');
webpack = require('webpack');
path = require('path');

config =
  mode: 'production'
  entry: './src/index.tsx'
  output:
    path: path.resolve(__dirname, 'dist')
    filename: 'poligonosapp.ts'
  module: rules: [ {
    test: /\.(js|jsx)$/
    use: 'babel-loader'
  } ]
  plugins: [
    new HtmlWebpackPlugin(template: './src/index.html')
  ]

module.exports = config;
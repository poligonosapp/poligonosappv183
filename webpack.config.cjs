// typescript webpack.config.js https://webpack.js.org/guides/typescript/
var path = require('path');
var webpack = require('webpack');// https://stackoverflow.com/questions/31592819/referenceerror-webpack-is-not-defined

var StylelintPlugin = require('stylelint-webpack-plugin');

var JsonMinimizerPlugin = require("json-minimizer-webpack-plugin");
var CopyPlugin = require("copy-webpack-plugin");

var ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
var extendDefaultPlugins = require("svgo");

var MiniCssExtractPlugin = require("mini-css-extract-plugin");

var LoadablePlugin = require('@loadable/webpack-plugin');

var fs = require('fs-extra');
var _ = require('lodash');

var PoligonosApp = require('./src/PoligonosApp');

var context = require('./src/App.tsx');

var request = require('./src/Server');

var callback = Function();
callback = PoligonosApp.prototype.PoligonosAppMethod();

module.exports = {
  node: {
    Buffer: false,
    process: false,
  },
  devServer: {
    open: {
      target: ['index.html', 'http://localhost:8080/api/polygons.html', 'http://localhost:8080/polygons.html'],
      app: {
        name: 'google-chrome',
        arguments: ['--incognito', '--new-window'],
      },
  },
  externals: {
    jquery: 'jQuery',
    fs: 'fs-extra',
    react: 'react',
    lodash: {
      commonjs : 'lodash',
      amd: 'lodash',
      root : '_',
    },
    PoligonosApp: function ({ context, request }, callback) {
      if (/^PoligonosApp%on%$/.test(request)) {
        // Externalize to a commonjs module using the request path
        return callback(null, 'commonjs ' + request);
      }

      // Continue without externalizing the import
      callback();
    },
  },
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: 'poligonosapp.cjs',
    path: path.resolve(__dirname, 'dist'),
  },  
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
  },
  module: {
    loaders: [
      {exclude: ['node_modules'], loader: 'babel', test: /\.jsx?$/},
      {loader: 'style-loader!css-loader', test: /\.css$/},
      {loader: 'url-loader', test: /\.gif$/},
      {loader: 'file-loader', test: /\.(ttf|eot|svg)$/},
    ],
    rules: [
      { test: /\.txt$/, use: 'raw-loader' },
      {
        test: /\.json$/i,
        type: "asset/resource",
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: "asset",
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      }
    ],
  },
  resolve: {
    root: [
      path.resolve(__dirname, '../node_modules'),
      path.resolve(__dirname, '../src'),
    ],
    alias: {
      config$: './configs/app-config.js',
      react: './vendor/react-master',
      "jquery-ui": "jquery-ui/jquery-ui.js",
      modules: path.join(__dirname, "node_modules"),
      'jquery-ui': 'jquery-ui-dist/jquery-ui.js',
      Utilities: path.resolve(__dirname, 'src/utilities/'),
      Templates: path.resolve(__dirname, 'src/templates/'),
    },
    extensions: ['', 'js', 'jsx','.ts', '.tsx','.json', '.geojson'],
    modules: [
      'node_modules',
      'bower_components',
      'shared',
      '/shared/vendor/modules',
    ],
  },plugins: [
    new LoadablePlugin(),
    new MiniCssExtractPlugin(),
    new ImageMinimizerPlugin({
      minimizerOptions: {
        // Lossless optimization with custom option
        // Feel free to experiment with options for better result for you
        plugins: [
          ["gifsicle", { interlaced: true }],
          ["jpegtran", { progressive: true }],
          ["optipng", { optimizationLevel: 5 }],
          // Svgo configuration here https://github.com/svg/svgo#configuration
          [
            "svgo",
            {
              plugins: extendDefaultPlugins([
                {
                  name: "removeViewBox",
                  active: false,
                },
                {
                  name: "addAttributesToSVGElement",
                  params: {
                    attributes: [{ xmlns: "http://www.w3.org/2000/svg" }],
                  },
                },
              ]),
            },
          ],
        ],
      },
    }),
    new CopyPlugin({
      patterns: [
        {
          context: path.resolve(__dirname, "dist"),
          from: "./src/*.json",
        },
      ],
    }),
    new StylelintPlugin(options),
      require('rollup-plugin-replace')({
    'process.env.NODE_ENV': JSON.stringify('production')
  }),
    require('rollup-plugin-replace')({
    'process.env.NODE_ENV': JSON.stringify('production')
  }),
  require('rollup-plugin-commonjs')(),
  require('rollup-plugin-terser')(),
    new webpack.ProvidePlugin({
      "$":"jquery",
      "jQuery":"jquery",
      "window.jQuery":"jquery"
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({ inject:true, template: path.resolve('./index.html'), }),
    [
      "postcss-preset-env",
      {
        // Options
      },
    ],
  ]
}};
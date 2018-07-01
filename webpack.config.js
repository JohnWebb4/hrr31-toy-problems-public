const path = require('path');
const dotenv = require('dotenv').config({ path: `${__dirname}/.env` });
const webpack = require('webpack');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve('./'),
    filename: 'bundle.js',
  },
  externals: {
    mocha: 'Mocha',
    chai: 'chai',
    jquery: 'jquery',
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: [
          path.resolve(__dirname, 'node_modules'),
        ],
        loader: 'babel-loader',
      },
    ],
  },
  node: {
    fs: 'empty',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': dotenv.parsed,
    }),
  ],
};

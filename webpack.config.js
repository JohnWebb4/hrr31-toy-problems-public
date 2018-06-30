const path = require('path');

module.exports = {
  entry: './setup.js',
  output: {
    path: path.resolve('./'),
    filename: 'bundle.js',
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
  externals: {
    mocha: 'Mocha',
    chai: 'chai',
    jquery: 'jquery',
  },
};

var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: __dirname + '/app',
  entry: './index.js',

  output: {
    path: __dirname + '/bin',
    publicPath: '/',
    filename: 'bundle.js',
  },

  stats: {
    colors: true,
    progress: true,
  },

  resolve: {
    extensions: ['', '.webpack.js', '.js'],
    modulesDirectories: [
      'app',
      'node_modules',
    ],
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        query: {
          presets: ['es2015'],
        },
        loader: 'babel',
      },
      {
        test: /\.mp3$/,
        loader: 'file',
      },
    ],
  },
};

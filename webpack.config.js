var webpack = require('webpack');

module.exports = {
  entry: {
    pivotal: './lib/extension/pivotal.js',
    basecamp: './lib/extension/basecamp.js'
  },
  output: {
    filename: '[name].js',
    path: 'dist'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['babel']
    },{
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass']
    },{
      test: /\.png$/,
      loaders: ['url']
    }]
  }
};

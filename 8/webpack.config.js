var path = require("path");
var webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',

  entry: {
    app: "./entry.js"
  },

  output: {
      path: path.join(__dirname, "build"),
      publicPath: "build/",
      filename: "[name].js"
  },

  module: {
    loaders: [
      { loader: 'babel', test: /.js$/, include: __dirname }
    ]
  }
};

var path = require("path");
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',

  entry: {
    public: "./public.js",
    admin: "./admin.js"
  },

  output: {
      path: path.join(__dirname, "build"),
      filename: "[name].js"
  },

  module: {
    loaders: [
      { loader: 'babel', test: /.js$/, include: __dirname }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      chunks: ["public", "admin"]
    })
  ]
};

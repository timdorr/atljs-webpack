var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',

  entry: "./entry.js",

  output: {
      path: __dirname,
      filename: "bundle.js"
  },

  module: {
    loaders: [
      { loader: 'babel', test: /.js$/, include: __dirname }
    ]
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: '"production"' } }),
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
  ]
};

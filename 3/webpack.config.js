module.exports = {
  entry: "./entry.js",

  output: {
      path: __dirname,
      filename: "bundle.js"
  },

  module: {
    loaders: [
      { loader: 'to-string', test: /buildTime\.js/ }
    ]
  }
};

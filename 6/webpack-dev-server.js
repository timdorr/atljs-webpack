var webpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');

var config = require("./webpack.config.js");
var compiler = webpack(config);

var server = new webpackDevServer(compiler, {
  hot: true
});

server.listen(8080);

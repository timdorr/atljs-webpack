// No Loader
// var buildTime = require('./buildTime.js');

// Loader!
var buildTime = require('to-string!./buildTime.js');

console.info('Built on ' + buildTime);

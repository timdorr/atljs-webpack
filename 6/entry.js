var counter = require('./counter');

var count = 0;

function countAndLog() {
  count = counter(count);

  console.log(count);
}

setInterval(countAndLog, 1000);

module.hot.accept('./counter', function() {
  counter = require('./counter');
});

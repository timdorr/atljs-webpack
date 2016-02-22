console.log(document.head.childNodes);

require.ensure(['react', 'react-dom', './app'], function() {

  console.log(document.head.childNodes);

  const React = require('react');
  const { render } = require('react-dom');

  const App = require('./app').default;

  render(
    <App />,
    document.getElementById('root')
  )
});

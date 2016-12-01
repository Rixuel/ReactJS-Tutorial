var ReactDOM = require('react-dom');
var React = require('react');
 
var Chat = require('./Chat');
var HelloWorld = require('./HelloWorld');
 
ReactDOM.render(
  <Chat />,
  document.getElementById('app')
);

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('app2')
);
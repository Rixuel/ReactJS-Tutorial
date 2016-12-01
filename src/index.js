var ReactDOM = require('react-dom');
var React = require('react');
 
var Chat = require('./Chat');
//var HelloWorld = require('./HelloWorld');
 
ReactDOM.render(
  <Chat />,
  document.getElementById('app')
);

const hw = (
  <h3>
    Hello World!
  </h3>
);

ReactDOM.render(
  hw,
  document.getElementById('helloworld')
);
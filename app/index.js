require('./stylesheet/base.scss');

var React = require('react');
var ReactDOM = require('react-dom');

var App = require('./views/app.jsx');

ReactDOM.render(
  <App/>, document.getElementById('content')
);

var React = require('react');

var Header = require('./header.jsx');
var Editor = require('./editor.jsx');

var themes = ['light', 'dark'];

module.exports = React.createClass({
  getInitialState: function getInitialState() {
    return {
      theme: themes[0]
    };
  },
  toggleTheme: function() {
    this.setState({
      theme: themes.indexOf(this.state.theme) == 0 ? themes[1] : themes[0]
    });
  },
  render: function() {
    return (
      <div>
        <Header toggleTheme={this.toggleTheme} />
        <Editor theme={this.state.theme}/>
      </div>
    )
  }
});

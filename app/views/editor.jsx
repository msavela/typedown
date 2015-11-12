var React = require('react');

var Codemirror = require('react-codemirror');

require('codemirror/mode/markdown/markdown.js');
require('codemirror/mode/gfm/gfm.js');

require('codemirror/addon/mode/overlay.js');
require('codemirror/addon/display/placeholder.js');

var README = require('../../README.md');

var Store = {
  get: function() {
    return localStorage.getItem('content');
  },
  set: function(content) {
    localStorage.setItem('content', content);
  }
};

module.exports = React.createClass({
  getInitialState: function getInitialState() {
    var content = Store.get();
    return {
      content: content != null ? content : README
    };
  },
  updateContent: function updateContent(content) {
    Store.set(content);
	},
  render: function() {
    var options = {
      theme: this.props.theme,
      mode: {
        name: 'gfm',
        highlightFormatting: true
      },
      lineNumbers: false,
      lineWrapping: true,
      autofocus: true,
      placeholder: 'Start typing...',
      tabSize: 2,
      scrollbarStyle: null
    };

    return (
      <Codemirror value={this.state.content} onChange={this.updateContent} options={options} />
    )
  }
});

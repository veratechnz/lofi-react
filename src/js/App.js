var React = require('react');
var ReactDOM = require('react-dom');

// React Components
var Sidenav = require('./Sidenav');
var Horizontalnav = require('./Horizontalnav');
var Cardwrapper = require('./Cardwrapper');

var App = React.createClass({
  render: function() {
    return (
		     <div className="app-container row over-row">
				<Sidenav />
				<Horizontalnav />
				<Cardwrapper />	     	
		     </div>  
    	);
  }
});

module.exports = App;

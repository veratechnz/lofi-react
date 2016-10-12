var React = require('react');
var ReactDOM = require('react-dom');

var Horizontalnav= React.createClass({
  render: function() {
    return (
    	<div className="nav-horizontal" id="navHorizontal">
    	  <a href="#" data-activates="slide-out" className="button-collapse btn-floating mob-menu btn-medium red" id="mobMenu">
    	    <i className="material-icons">menu</i>
    	  </a>
    	  <a className="btn-floating btn-medium red modal-trigger" href="#modal1" id="search">
    	    <i className="material-icons">search</i>
    	  </a>
    	
    	  <div className="fixed-action-btn horizontal click-to-toggle">
    	    <a className="btn-floating btn-medium green">
    	      <i className="material-icons">more_horiz</i>
    	    </a>
    	    <ul>
    	      <li><a className="btn-floating red"><i className="material-icons">insert_chart</i></a></li>
    	      <li><a className="btn-floating yellow darken-1"><i className="material-icons">format_quote</i></a></li>
    	      <li><a className="btn-floating purple"><i className="material-icons">publish</i></a></li>
    	      <li><a className="btn-floating blue"><i className="material-icons">attach_file</i></a></li>
    	    </ul>
    	  </div>
    	</div>
    );
  }
});

module.exports = Horizontalnav;

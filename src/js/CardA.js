var React = require('react');
var ReactDOM = require('react-dom');

var CardA = React.createClass({
  render: function() {
    return (

	  	<div className="card">
	  	  <div className="card-image">
	  	    <img src="img/card-a.jpg" />
	  	  </div>
	  	  <div className="card-content">
	  	    <p>CARD A</p>
	  	  </div>
	  	  <div className="card-action">
	  	    <a href="#">This is a link</a>
	  	  </div>
	  	</div>

    );
  }
});

module.exports = CardA;

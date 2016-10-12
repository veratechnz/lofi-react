var React = require('react');
var ReactDOM = require('react-dom');

var Sidenav= React.createClass({
  render: function() {
    return (
    	<div className="col s2" id="leftNavContainer">
    	  <div id="contentLeft">
    	    <ul id="leftNavigation">
    	      <li className="main-logo">LOGO HERE</li>
    	      <li><a href>Home <i className="fa fa-angle-down leftNavIcon" /></a></li>
    	      <li className="active">
    	        <a href="#">My dashboards <i className="fa fa-angle-down leftNavIcon" /></a>
    	        <ul>
    	          <li>
    	            <a href="#">Our history <i className="fa fa-angle-down leftNavIcon" /></a>
    	          </li>
    	          <li>
    	            <a href="#"> Our team <i className="fa fa-angle-down leftNavIcon" /></a>
    	          </li>
    	        </ul>
    	      </li>
    	      <li>
    	        <a href="#">Data by topic <i className="fa fa-angle-down leftNavIcon" /></a>
    	        <ul>
    	          <li>
    	            <a href="#"> Garden <i className="fa fa-angle-down leftNavIcon" /></a>
    	          </li>
    	          <li>
    	            <a href="#"> Office <i className="fa fa-angle-down leftNavIcon" /></a>
    	          </li>
    	          <li>
    	            <a href="#"> Home <i className="fa fa-angle-down leftNavIcon" /></a>
    	          </li>
    	        </ul>
    	      </li>
    	      <li>
    	        <a href="#"> Data by place <i className="fa fa-angle-down leftNavIcon" /></a>
    	      </li>
    	      <li>
    	        <a href="#"> Indicators <i className="fa fa-angle-down leftNavIcon" /></a>
    	      </li>
    	      <li>
    	        <a href="#"> Data for Maori <i className="fa fa-angle-down leftNavIcon" /></a>
    	      </li>
    	      <li className="split-marker">
    	        <a href="#"> Data via API <i className="fa fa-angle-down leftNavIcon" /></a>
    	      </li>
    	      <li>
    	        <a href="#"> Survey participants <i className="fa fa-angle-down leftNavIcon" /></a>
    	      </li>
    	      <li>
    	        <a href="#"> Contact us<i className="fa fa-angle-down leftNavIcon" /></a>
    	      </li>
    	      <li>
    	        <a href="#"> Privacy<i className="fa fa-angle-down leftNavIcon" /></a>
    	      </li>
    	      <li className="social-menu">
    	        <i className="fa fa-twitter-square" />
    	        <i className="fa fa-facebook-square" />
    	        <i className="fa fa-linkedin-square" />
    	      </li>
    	    </ul>
    	  </div>
    	</div>
    );
  }
});

module.exports = Sidenav;

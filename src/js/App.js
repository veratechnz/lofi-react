var React = require('react');
var ReactDOM = require('react-dom');

// React Components
var Sidenav = require('./Sidenav');
var Horizontalnav = require('./Horizontalnav');
var Mobilenav = require('./Mobilenav');
var Cardwrapper = require('./Cardwrapper');

var App = React.createClass({
  
  getInitialState: function(){
  	return{
  		testData: []
  	};
  },

  componentDidMount: function(){
  	var pullData = this.serverRequest =  $.get('data/test.json', function(result) {
  		this.setState({ testData: result }); 
     }.bind(this));  	
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function() {
    return (
      		  <div className="app-container row over-row">
      				<Sidenav />
      				<Horizontalnav />
              <Mobilenav />
      				<Cardwrapper dataAccess= { this.state.testData } />	  	
      		  </div>  
    	);
  }

});

module.exports = App;

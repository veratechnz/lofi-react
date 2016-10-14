var React = require('react');
var ReactDOM = require('react-dom');

var CardA = React.createClass({
  render: function() {

  	var theData = this.props.dataAccess;

  	return (
  		<div className ="row">
  		  		{theData.map(function(thatiz, index){
  		  			return 	<div className="col s4">
	  		  					<div className="card" key={ index }>
	  								<div className="card-image">
	  								  <img src="img/card-a.jpg" />
	  								</div>
	  								<div className="card-content">
	  						  			<p>{thatiz.name}</p>
	  						  		</div>
	  						  		<div className="card-action">
	  						  		  <a href="#">{thatiz.address.street}</a>
	  						  		</div>
	  							</div>
  							</div>;
  		  		})}
  		 </div>

  	);


  	// var nest = [];
  	// theData.forEach( function (arrayItem)
  	// {
  	// 	var x = arrayItem.name;
  	// 	console.log(x);
	  //   nest.push(
			// <div className="card">
			// 	<div className="card-image">
			// 	  <img src="img/card-a.jpg" />
			// 	</div>
			// 	<div className="card-content">
		 //  			<p>{arrayItem.name}</p>
		 //  		</div>
		 //  		<div className="card-action">
		 //  		  <a href="#">This is a link</a>
		 //  		</div>
	  // 		</div>
	  //   );
  	// });

  }

});

module.exports = CardA;

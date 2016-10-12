var React = require('react');
var ReactDOM = require('react-dom');

// React Components
var CardA = require('./CardA');

var Cardwrapper= React.createClass({
  render: function() {
    return (
    	<div className="col s10 card-wrapper" id="cardWrapper"> 
    	  <div className="row">

    	    <div className="col s4">
                <CardA />
    	    </div>
    	    <div className="col s4">
    	      <div className="card">
    	        <div className="card-image">
    	          <img src="img/card-a.jpg" />
    	        </div>
    	        <div className="card-content">
    	          <p>I am a very simple card. I am good at containing small bits of information.
    	            I am convenient because I require little markup to use effectively.</p>
    	        </div>
    	        <div className="card-action">
    	          <a href="#">This is a link</a>
    	        </div>
    	      </div>
    	    </div>
    	    <div className="col s4">
    	      <div className="card">
    	        <div className="card-image">
    	          <img src="img/card-a.jpg" />
    	        </div>
    	        <div className="card-content">
    	          <p>I am a very simple card. I am good at containing small bits of information.
    	            I am convenient because I require little markup to use effectively.</p>
    	        </div>
    	        <div className="card-action">
    	          <a href="#">This is a link</a>
    	        </div>
    	      </div>
    	    </div>
    	  </div>

    	  <div className="row row-b">
    	    <div className="col s4"> 
    	      <div className="card horizontal">
    	        <div className="card-image">
    	          <img src="img/card-b.jpg" />
    	        </div>
    	        <div className="card-stacked">
    	          <div className="card-content">
    	            <p>I am a very simple card. I am good at containing small bits of information.</p>
    	          </div>
    	          <div className="card-action">
    	            <a href="#">This is a link</a>
    	          </div>
    	        </div>
    	      </div>
    	    </div> 
    	    <div className="col s4">          
    	      <div className="card horizontal">
    	        <div className="card-image">
    	          <img src="img/card-b.jpg" />
    	        </div>
    	        <div className="card-stacked">
    	          <div className="card-content">
    	            <p>I am a very simple card. I am good at containing small bits of information.</p>
    	          </div>
    	          <div className="card-action">
    	            <a href="#">This is a link</a>
    	          </div>
    	        </div>
    	      </div>
    	    </div>
    	    <div className="col s4">          
    	      <div className="card horizontal">
    	        <div className="card-image">
    	          <img src="img/card-b.jpg" />
    	        </div>
    	        <div className="card-stacked">
    	          <div className="card-content">
    	            <p>I am a very simple card. I am good at containing small bits of information.</p>
    	          </div>
    	          <div className="card-action">
    	            <a href="#">This is a link</a>
    	          </div>
    	        </div>
    	      </div>
    	    </div>
    	  </div> 

    	  <div className="row row-c">
    	    <div className="col s3"> 
    	      <div className="card">
    	        <div className="card-image waves-effect waves-block waves-light">
    	          <img className="activator" src="img/card-c.jpg" />
    	        </div>
    	        <div className="card-content">
    	          <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
    	          <p><a href="#">This is a link</a></p>
    	        </div>
    	        <div className="card-reveal">
    	          <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
    	          <p>Here is some more information about this product that is only revealed once clicked on.</p>
    	        </div>
    	      </div>
    	    </div> 
    	    <div className="col s3"> 
    	      <div className="card">
    	        <div className="card-image waves-effect waves-block waves-light">
    	          <img className="activator" src="img/card-c.jpg" />
    	        </div>
    	        <div className="card-content">
    	          <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
    	          <p><a href="#">This is a link</a></p>
    	        </div>
    	        <div className="card-reveal">
    	          <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
    	          <p>Here is some more information about this product that is only revealed once clicked on.</p>
    	        </div>
    	      </div>
    	    </div>
    	    <div className="col s3"> 
    	      <div className="card">
    	        <div className="card-image waves-effect waves-block waves-light">
    	          <img className="activator" src="img/card-c.jpg" />
    	        </div>
    	        <div className="card-content">
    	          <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
    	          <p><a href="#">This is a link</a></p>
    	        </div>
    	        <div className="card-reveal">
    	          <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
    	          <p>Here is some more information about this product that is only revealed once clicked on.</p>
    	        </div>
    	      </div>
    	    </div>
    	    <div className="col s3">
    	      <div className="card">
    	        <div className="card-image waves-effect waves-block waves-light">
    	          <img className="activator" src="img/card-c.jpg" />
    	        </div>
    	        <div className="card-content">
    	          <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
    	          <p><a href="#">This is a link</a></p>
    	        </div>
    	        <div className="card-reveal">
    	          <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
    	          <p>Here is some more information about this product that is only revealed once clicked on.</p>
    	        </div>
    	      </div>
    	    </div>
    	  </div> 
    	  
    	  <div className="row row-d">
    	    <div className="col s6"> 
    	      <div className="card horizontal">
    	        <div className="card-image">
    	          <img src="http://placehold.it/100x190" />
    	        </div>
    	        <div className="card-stacked">
    	          <div className="card-content">
    	            <p>I am a very simple card. I am good at containing small bits of information.</p>
    	          </div>
    	          <div className="card-action">
    	            <a className="waves-effect waves-light btn fr">button</a>
    	          </div>
    	        </div>
    	      </div>
    	    </div> 
    	    <div className="col s6">          
    	      <div className="card horizontal">
    	        <div className="card-image">
    	          <img src="http://placehold.it/100x190" />
    	        </div>
    	        <div className="card-stacked">
    	          <div className="card-content">
    	            <p>I am a very simple card. I am good at containing small bits of information.</p>
    	          </div>
    	          <div className="card-action">
    	            <a className="btn-floating btn-medium waves-effect waves-light red fr"><i className="material-icons">add</i></a>
    	          </div>
    	        </div>
    	      </div>
    	    </div>
    	  </div> 
    	  
    	  <div className="row row-b">
    	    <div className="col s12"> 
    	      <div className="card horizontal">
    	        <div className="card-image">
    	          <img src="http://placehold.it/100x190" />
    	        </div>
    	        <div className="card-stacked">
    	          <div className="card-content">
    	            <p>I am a very simple card. I am good at containing small bits of information.</p>
    	          </div>
    	        </div>
    	      </div>
    	    </div> 
    	   
    	    <div id="modal1" className="modal">
    	      <div className="modal-content">
    	        <h4>Search Time</h4>
    	        <p>A bunch of text</p>
    	      </div>
    	      <div className="modal-footer">
    	        <a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
    	      </div>
    	    </div>
    	    
    	  </div> 
    	</div> 
    );
  }
});

module.exports = Cardwrapper;

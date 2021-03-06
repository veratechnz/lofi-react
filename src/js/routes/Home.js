var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
  render: function() {
    return (
    		     <div className="row over-row">
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
    		       
    		       <ul id="slide-out" className="side-nav">
    		         <div className="mobile-close">
    		           <a href="#" className="mobile-close">
    		             <i className="material-icons closer" id="closer">close</i>
    		           </a>
    		         </div>
    		         <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
    		         <li><a href="#!">Second Link</a></li>
    		         <li><div className="divider" /></li>
    		         <li><a className="subheader">Subheader</a></li>
    		         <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
    		       </ul>

    		       <div className="col s10 card-wrapper" id="cardWrapper"> 
    		         <div className="row">
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
    		     </div>  
    	);
  }
});

module.exports = App;

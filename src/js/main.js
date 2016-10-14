// All Imports
// 
//jQuery
$ = jQuery = require('jquery');

//SlideOut nav
var Slideout = require('slideout');

//Materialize js
var materialize = require("materialize");

//Namespace pattern
var namespace = require('./namespace.js');

//React js library
var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;

// React Components
var App = require('./App');

//CUSTOM JS
/*
Created: Sep 30, 2016 
Author:  Jared Neems // Statistics New Zealand
Pupose:  Front End UI Javascript For Initial Design, User Interface, 
		 Responsive Testing and Presentation.
Standards: 
*/

(function(){

		ReactDOM.render((
			<App />
		), document.getElementById('app'));


		// Initiale namespace instance to creeate accesible object
		UI = namespace.nm();

		//Use namespace method
		UI.createNS("UI.menus");
		UI.createNS("UI.init");

		UI.menus = function(){

	 		//Check window size and run internal functions. 
	 		var checkSize = $(window).width();
	 		var oldNav = 'leftNavContainer';
	 		var newBody = 'cardWrapper';

	 		if(checkSize <= 1180){
	 			removeNav();
	 			stretchHorizontalNav();
	 			updateMatClass();
	 		}

	 		//Removes static desktop side nav
			function removeNav(){
				//Grab the black side nav and remove it from the dom.
				var elem = document.getElementById(oldNav);
				elem.parentNode.removeChild(elem);
			}

			//Changes Material design class to full width
			function updateMatClass(){
				//Change Materilize layout from 10 to 12 for responsiv mobile. Checking via regex.
				document.getElementById(newBody).className = //cont' to next line
				document.getElementById(newBody).className.replace( /(?:^|\s)s10(?!\S)/g , ' s12' );
				//Trigger inclusion of mobile side nav
				mobileSideNav();
			}

			//Stretches current horizontal nav to full width after side nav removal
			function stretchHorizontalNav(){
				document.getElementById("navHorizontal").style.width = "100%";
			}

			//Activate and setup mobile side navigation
			function mobileSideNav(){
				$('.button-collapse').sideNav();
				$('.side-nav').css('display', 'block');
				$('#mobMenu').css('display', 'inline-block');
			}

		};

		UI.init = function(){
			//Close Button For Mobile Menu
			$('#closer').click(function(event){
				event.preventDefault();
				$('.button-collapse').sideNav('hide');
			});	

			//Modal Trigger and Setup
			$('.modal-trigger').leanModal();

		};

	// Invoke UI js elements
	UI.menus();	
	UI.init();

})(); //iffe ends











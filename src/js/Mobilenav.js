var React = require('react');
var ReactDOM = require('react-dom');

var Mobilenav = React.createClass({
  render: function() {
    return (

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

    );
  }
});

module.exports = Mobilenav;


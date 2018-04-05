$ = jQuery = require('jquery'); //imports jQuery into the Browserify module
var React = require('react');
var Home = require('./components/homePage');
var About = require('./components/about/aboutPage');
var Authors = require('./components/authors/authorPage');
var Header = require('./common/header');

(function (window, document) {
    "use strict";

	var App = React.createClass({
		render: function() {
			var Child;

			switch(this.props.route) {
                case 'about': Child = About; break;
                case 'authors': Child = Authors; break;
				default: Child = Home;
			}

			return (
				<div>
					<Header/>
					<Child/>
				</div>
			);

		}
	});

	function render() {
		var route = window.location.hash.substr(1);
		React.render(<App route={route} />, document.getElementById('app'));
	}

	window.addEventListener('hashchange', render);
	render();

})(window, document);

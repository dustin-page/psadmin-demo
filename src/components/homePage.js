"use strict";

var React = require('react');

var Home = React.createClass({
    render: function(){
        return (
            <div className="jumbotron">
                <h1>Pluralsight Administration</h1>
                <p>React, React Router, and Flux for ultra-responsive web apps.</p>
            </div>
        ); //Whatever the render function returns is what is displayed to the screen. This is JSX code.
    }
});

module.exports = Home;
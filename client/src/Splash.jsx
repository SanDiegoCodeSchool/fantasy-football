import React, { Component } from 'react';

class Splash extends Component {
    constructor(){
        super();
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        window.location.assign("/#signup");
    }

    render() {
        return (
            <div>
                <h1>Welcome To Fan Picks</h1>
                <button onClick={this.clickHandler}>Click to Get Started</button>
                <p>Page 1/4</p>
            </div>
        );
    };
};

export default Splash;
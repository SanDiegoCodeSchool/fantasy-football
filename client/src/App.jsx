import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, HashRouter } from "react-router-dom";
import Signup from './Signup';
import Survey from './Survey';
import Offer from './Offer';
import Splash from './Splash';

class App extends Component {
    render() {
        return (
          <HashRouter>
            <div>
              <Route exact path="/" component={Splash} />
              <Route path="/signup" component={Signup} />
              <Route path="/survey/:id" component={Survey} />
              <Route path="/offer" component={Offer} />
            </div>
          </HashRouter>
        );
    };
};

export default App;
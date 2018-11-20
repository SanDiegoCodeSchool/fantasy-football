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
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/survey">Survey</Link>
                </li>
                <li>
                  <Link to="/offer">Offer</Link>
                </li>
              </ul>
              <hr />
              <Route exact path="/" component={Splash} />
              <Route path="/survey" component={Survey} />
              <Route path="/offer" component={Offer} />
            </div>
          </HashRouter>
        );
    };
};

export default App;
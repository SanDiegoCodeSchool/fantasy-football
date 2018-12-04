import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, HashRouter } from "react-router-dom";
import { Grommet } from 'grommet';
import Signup from './Signup';
import Survey from './Survey';
import Offer from './Offer';
import Splash from './Splash';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};

class App extends Component {
    render() {
        return (
          <HashRouter>
            <Grommet theme={theme}>
              <div>
                <Route exact path="/" component={Splash} />
                <Route path="/signup" component={Signup} />
                <Route path="/survey/:id" component={Survey} />
                <Route path="/offer" component={Offer} />
              </div>
              </Grommet>
            </HashRouter>
        );
    };
};

export default App;
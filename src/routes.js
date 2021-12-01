import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from './templates/Home';

class Routing extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => 
            <React.Fragment>
              <Home />
            </React.Fragment>}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default Routing;

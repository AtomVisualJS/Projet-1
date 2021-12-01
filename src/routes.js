import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from './templates/Home';
import Details from './templates/Details';

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
          <Route exact path="/posts/:id" component={Details} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default Routing;

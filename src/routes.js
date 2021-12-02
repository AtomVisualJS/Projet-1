import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./templates/Home";
import Details from "./templates/Details";

/// Pages
import Compte from "./pages/Compte";

class Routing extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <Home />
              </React.Fragment>
            )}
          />
          <Route exact path="/details/:id" component={Details} />
          <Route exact path="/Compte" component={Compte} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default Routing;

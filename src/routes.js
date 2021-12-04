import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./Home/Home";
import Maps from "./pages/Proximite"

/// Pages
import Compte from "./pages/Compte";
import Proximite from "./pages/Proximite";
import NewProducts from "./templates/NewProducts";
import Details from "./templates/Details";
import Profil from "./pages/Profil.js";

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
          <Route exact path="/products/:id" component={Details} />
          <Route exact path="/proximite" component={Proximite}/>
          <Route  path="/profil" component={Profil} />
          <Route exact path="/maps" component={Maps}/>
          <Route exact path="/compte" component={Compte} />
          <Route exact path="/newproducts" component={NewProducts} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default Routing;

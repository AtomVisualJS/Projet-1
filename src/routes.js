import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";




/// Pages
import Compte from "./pages/Compte";
import Proximite from "./pages/Proximite";

import Register from "./pages/connection/Register";
import Home from "./Home/Home";
import SocietyMaps from "./pages/details/SocietyMaps";
import Login from "./pages/connection/Login";
import Society from "./pages/Society";
import NewProducts from "./admin/NewSociety";


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
                <Home />
                <Home />
              
                
              </React.Fragment>
            )}
          />

          <Route exact path="/proximite" component={Proximite}/>
         
          <Route exact path="/position/:id/:lat/:lng" component={SocietyMaps}/>
          <Route exact path="/society/:id" component={Society} />
         
          <Route exat path="/admin" component={NewProducts} />
          
          
          <Route exact path="/compte" component={Compte} />
          <Route exact path="/compte/connexion" component={Login} />
          <Route exact path="/compte/inscription" component={Register} />
          
          
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default Routing;

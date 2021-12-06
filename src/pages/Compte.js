import React from "react";


// Connexion

import Register from "./connection/Register";
import Login from "./connection/Login";


class Compte extends React.Component {
  render() {
    return (
        <div>
        <Register />
        <Login />
     </div>
    );
  }
}

export default Compte;

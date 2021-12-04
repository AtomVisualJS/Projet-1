import React from "react";


// Connexion
import Login from "./connection/Login";
import Register from "./connection/Register";
  


class Compte extends React.Component {
  render() {
    return (
        <div className="container">
        <Register />
        <Login/>
     </div>
    );
  }
}

export default Compte;

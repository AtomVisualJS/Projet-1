import React from "react";


// Connexion

import Register from "./connection/Register";
  import {Link} from "react-router-dom";


class Compte extends React.Component {
  render() {
    return (
        <div className="container">
        <Register />
        <Link to="/compte/register">
            S'inscrire
        </Link>
     </div>
    );
  }
}

export default Compte;

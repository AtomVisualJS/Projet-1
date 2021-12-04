import React, { Component } from "react";
import "../css/proximite.css";
import Maps from "../web/Maps";

class Proximite extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h2>À Proximité</h2>
          <Maps />
        </div>
      </div>
    );
  }
}

export default Proximite;

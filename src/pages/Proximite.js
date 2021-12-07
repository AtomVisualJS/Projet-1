import React, { Component } from "react";
import "../css/proximite.css";
import MainMaps from "../web/MainMaps";

class Proximite extends Component {
  render() {
    return (
      <div>
        <h2 style={{textAlign:"center", marginTop:5}}>À Proximité</h2>
        <div className="container">
          

          <MainMaps />
        </div>
      </div>
    );
  }
}

export default Proximite;

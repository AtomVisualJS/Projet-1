import React, { Component } from "react";
import "../css/proximite.css";
import Maps from "../web/MiniMaps";

class Proximite extends Component {
  render() {
    return (
      <div>
        <h2 style={{textAlign:"center", marginTop:18}}>À Proximité</h2>
        <div className="container">
          

          <Maps />
        </div>
      </div>
    );
  }
}

export default Proximite;

import React, { Component } from "react";
import "../css/proximite.css";
import Maps from "../web/Maps";
import BootstrapDialog from "../templates/BootstrapDialog";

class Proximite extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h2>À Proximité</h2>
          <div>
          <Maps />
          <BootstrapDialog/>
          </div>
        </div>
      </div>
    );
  }
}

export default Proximite;

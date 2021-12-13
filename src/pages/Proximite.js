import React, { Component } from "react";

import VirtualizedList from '../templates/VirtualizedList';
import MainMaps from "../web/MainMaps";

class Proximite extends Component {
  render() {
    return (
      <div>
     
        <br />
        <h2 style={{textAlign:"center", marginTop:5}}>À Proximité</h2>
        <br />
        <div className="container">
          

          <MainMaps />
          
        </div>
        <VirtualizedList />
      </div>
    );
  }
}

export default Proximite;

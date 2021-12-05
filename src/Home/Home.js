import React, { Component } from "react";

import BasicMenu from "../js/BasicMenu";
import ButtonBases from "../js/ButtonBases";
import SwipeableTextMobileStepper from "../js/SwipeableTextMobileStepper";

import MiniMaps from "../web/MiniMaps";

import "./css/home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <BasicMenu />
          <ButtonBases /> 
         
         <SwipeableTextMobileStepper/>
       
      
          <MiniMaps />
       
          
         
        </div>
      </div>
    );
  }
}

export default Home;

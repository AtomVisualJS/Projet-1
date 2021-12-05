import React, { Component } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  
  height: "200px",
  border: "1px solid black",
  borderRadius: "5px",
  boxShadow: "0px 0px 5px black",
  backgroundColor: "white",
  width: "98%",
  marginLeft: "1%",

 
  

  

 

};

const center = {
  lat: -3.745,
  lng: -38.523,
};

class MiniMaps extends Component {
  render() {
    return (
      <LoadScript googleMapsApiKey="AIzaSyDSQ9NeiM6g-CT1RtGzp4tbMewAHhXJhEQ">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      </LoadScript>
    );
  }
}

export default MiniMaps;

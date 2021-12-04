import React, { Component } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "50%",
  height: "200px",
 

};

const center = {
  lat: -3.745,
  lng: -38.523,
};

class MiniMaps extends Component {
  render() {
    return (
      <LoadScript googleMapsApiKey="AIzaSyDSQ9NeiM6g-CT1RtGzp4tbMewAHhXJhEQ">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      </LoadScript>
    );
  }
}

export default MiniMaps;

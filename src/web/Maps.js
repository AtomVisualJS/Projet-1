import React, { Component } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "90%",
  height: "400px",
  margin: "5%",
};

class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      lng: null,
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        this.setState({ 
          center: { lat, lng },
         });

      }.bind(this)
    );
  }

  render() {
    return (
      <LoadScript googleMapsApiKey="AIzaSyDSQ9NeiM6g-CT1RtGzp4tbMewAHhXJhEQ">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={this.state.center}
          zoom={11}
        >
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      </LoadScript>
    );
  }
}

export default Maps;

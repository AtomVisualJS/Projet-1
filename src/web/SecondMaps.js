import React from "react";
import { useParams } from "react-router";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const SecondMaps = () => {
  const containerStyle = {
    width: "80%",
    height: "400px",
    margin:"10%"
  };

 
  const { lat } = useParams();
  const { lng } = useParams();
  console.log(lat, lng);

  const center = {
    lat: parseFloat(lat),
    lng: parseFloat(lng),
  };

  return (
    <div>
      <div></div>
      <LoadScript googleMapsApiKey="AIzaSyDSQ9NeiM6g-CT1RtGzp4tbMewAHhXJhEQ">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default SecondMaps;

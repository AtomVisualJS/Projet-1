import React from 'react';
import { useParams } from 'react-router';
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const SecondMaps = () => {

  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const { lat } = useParams();
  const { lng } = useParams();
  const { title } = useParams();
  const {adress} = useParams();
  const { city } = useParams();


  const center = {
    lat: parseFloat(lat),
    lng: parseFloat(lng)
  };


  return (
    <div>
      <div>
        <br />
       <h1>{title}</h1>
        <h2>{adress}, {city} </h2>
       
      </div>
    <LoadScript googleMapsApiKey="AIzaSyDSQ9NeiM6g-CT1RtGzp4tbMewAHhXJhEQ">
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  </LoadScript>
  </div>
  );
}


export default SecondMaps;

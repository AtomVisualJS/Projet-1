import { useSelector } from "react-redux";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import React from "react";
const containerStyle = {
  width: "100%",
  height: "420px",
};


const SecondMaps = () => {
  const data = useSelector((state) => state.data.data);
  console.log(data);
  const renderedData = data.map((item) => {
      const center = {
        lat: item.society.center.lat,
        lng: item.society.center.lng,
        };

    return (
    <div>
      
        <div className="card mb-4 shadow-sm">
          <h5 className="card-header">{item.title}</h5>
          <p className="card-text">{item.society.address} <br/>
          {item.society.postalCode} {item.society.city}</p>
          
          
        <LoadScript googleMapsApiKey="AIzaSyDSQ9NeiM6g-CT1RtGzp4tbMewAHhXJhEQ">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={16}
        >
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      </LoadScript>
        </div>
      </div>
    
    );
  });

  return (
    <div className="container">
        <div className="row">{renderedData}</div>
    </div>
    );
};

export default SecondMaps;

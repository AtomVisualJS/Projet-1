import "./css/home.css";
import * as React from "react";
import Button from "@mui/material/Button";
import ButtonBases from "../templates/ButtonBases";
import RadioGroupRating from "../templates/RadioGroupRating";

import MediaCard from "../templates/MediaCard";

const Home = () => {
  return (
    <div className="container">
      <ButtonBases />
  
      <div style={{textAlign:"center",}}>
      <div className="row">
      <MediaCard />
      <MediaCard />
     
      </div> <br />
      </div>
      <Button
        variant="contained"
        color="primary"
        style={{ float: "right", margin: 5 }}
      >
        En savoir Plus
      </Button>
      <br />
      <RadioGroupRating /> 98%
    </div>
  );
};

export default Home;

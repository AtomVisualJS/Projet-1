import "./css/home.css";
import * as React from "react";

import { Avatar } from "@mui/material";


import RecipeReviewCard from "../templates/RecipeReviewCard";
const Home = () => {
  return (
    <div className="container">
      
  
      <div style={{textAlign:"center",}}>
     <div  width="50%">
       <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" style={{margin:10}} />
      <RecipeReviewCard />
     


     </div>
     </div>
    </div>
  );
};

export default Home;

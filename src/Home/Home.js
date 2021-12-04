



import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import React, { Component } from "react";
import MiniMaps from "../web/MiniMaps"
import "../css/home.css";
import ButtonBases from "../js/ButtonBases";
import BasicTabs from "../js/BasicTabs";




class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    axios.get("http://localhost:5000/api/products").then((res) => {
      this.setState({
        data: res.data,
      });
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          {this.state.data.map((data) => (

              <div className="box" key={data._id}>
                <div style={{ float: "right", margin: 5 }}>
                  <Link to="/profil">
                  <Avatar src="https://bio-conquete.fr/wp-content/uploads/2020/10/IMG_7552-scaled.jpg" />
                  <p> Entreprise</p>
                  </Link>
                </div>
                <h2>{data.name}</h2>{" "}
                
                <ButtonBases />
                <div className="boxInfos">
                <BasicTabs />
                </div>
                <MiniMaps />
             
              <br /><Link to={`/products/${data._id}`}>Voir plus d'infos</Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;

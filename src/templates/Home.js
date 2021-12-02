import { Avatar } from "@mui/material";
import axios from "axios";
import React, { Component } from "react";
import HomeInfos from "./HomeInfos";
import "../css/imgbox.css";
import ButtonBases from "../js/ButtonBases";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    axios.get("http://localhost:5000/api/upload").then((res) => {
      this.setState({
        data: res.data.posts,
      });
      console.log(this.state.data);
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <h1 style={{ textAlign: "center" }}>Images</h1>
          {this.state.data.map((data) => (
            <div className="imgBox" key={data._id}>
              <div style={{ float: "right", margin: 10 }}>
                <Avatar />
                users
              </div>
              <h2>{data.name}</h2>
              <p>{data.price} $</p>
              <ButtonBases />
              <br />
              <Link to={`/details/${data._id}`}>
                <Button
                  variant="contained"
                  disableElevation
                  style={{
                    float: "right",
                    marginRight: 25,
                    backgroundColor: "blue",
                    color: "white",
                  }}
                >
                  En savoir plus
                </Button>
              </Link>
              <HomeInfos />
              <br /> <br /> <br />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;

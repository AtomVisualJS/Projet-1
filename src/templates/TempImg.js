import axios from "axios";
import React, { Component } from "react";
import "../css/imgbox.css";

class TempImg extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: []
    };
  }
  componentDidMount() {
    axios.get("http://localhost:5000/api/upload").then((res) => {
      this.setState({
        data: res.data.posts
      });
      console.log(this.state.data);
    });
  }

  render() {
    return (
        <div>
            <h1 style={{textAlign:"center"}}>Images</h1>
            {this.state.data.map(data => (
                <div className="imgBox" key={data._id}>
                    <h1>{data.name}</h1>
                    <img src={data.file} alt="" width="100%" className="firstImg"/>  
                    <p>{data.description}</p>
                </div>  
            ))}
      

        </div>
       
    );
  }
}

export default TempImg;

import React, { Component } from "react";
import axios from "axios";

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      details: [],
      loading: true,
    };
 console.log(this.props.match.params.id);
  }



  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/posts/${this.props.match.params.id}`)
      .then((res) => {
        this.setState({ details: res.data, loading: false });
      });
  }

  

  render() {
    return (
      <div>
        {this.state.loading ? (
          <div>Loading...</div>
        ) : (
          <div key={this.state.details.id}>
            <h1>{this.state.details.title}</h1>
            <p>{this.state.details.body}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Details;

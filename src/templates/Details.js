import React, { Component } from "react";
import api from "../api/url"

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
    (async () => {
      const details = await api.get(`/post/${this.props.match.params.id}`);
      this.setState({ details: details.data, loading: false });
    }
    )();
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

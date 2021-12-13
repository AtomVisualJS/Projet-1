import axios from "axios";
import React, { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientname: "",
      clientemail: "",
      clientpassword: "",
    };
    this.handleClientNameChange = this.handleClientNameChange.bind(this);
    this.handleClientEmailChange = this.handleClientEmailChange.bind(this);
    this.handleClientPasswordChange = this.handleClientPasswordChange.bind(this);
    this.handleClientSubmit = this.handleClientSubmit.bind(this);
  }

  handleClientNameChange(event) {
    this.setState({ clientname: event.target.value });
  }

  handleClientEmailChange(event) {
    this.setState({ clientemail: event.target.value });
  }

  handleClientPasswordChange(event) {
    this.setState({ clientpassword: event.target.value });
  }

  handleClientSubmit(event) {
    event.preventDefault();
    const client = {
      clientname: this.state.clientname,
      clientemail: this.state.clientemail,
      clientpassword: this.state.clientpassword,
    };
    axios.post("http://localhost:5000/api/clients/register", client).then((res) => {
      const result = res.data;
       alert(result.message);
      this.props.history.push("/");
    });
  }

  render() {
    return (
      <div>
        <div
          className="container"
          style={{ width: "70%", padding: "7%" }}
        >
          <div className="row">
            <label>
              <h1 style={{ textAlign: "center" }}>Inscription</h1>
            </label>
            <form onSubmit={this.handleClientSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.clientname}
                  onChange={this.handleClientNameChange}
                />
                <br />
                <label>Email</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.clientemail}
                  onChange={this.handleClientEmailChange}
                />
                <br />
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={this.state.clientpassword}
                  onChange={this.handleClientPasswordChange}
                />
                <br />
                <div style={{textAlign:"center"}}>
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
                </div>
                <br />
              </div>
            </form>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default Register;

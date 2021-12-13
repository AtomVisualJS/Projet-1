import axios from "axios";
import React, { Component } from "react";
import {Link} from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientemail: "",
      clientpassword: "",
      client: [],
    };
    this.handleClientEmailChange = this.handleClientEmailChange.bind(this);
    this.handleClientPasswordChange = this.handleClientPasswordChange.bind(this);
    this.handleClientSubmit = this.handleClientSubmit.bind(this);
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
      clientemail: this.state.clientemail,
      clientpassword: this.state.clientpassword,
    };
    axios.post("http://localhost:5000/api/clients/login", client).then((res) => {
      console.log(res.data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("client", res.data.client);
      this.props.history.push("/");
      return res.data;
    });
    
    
  }

  render() {
    return (
      <div>
        <div
          className="container"
          style={{ marginLeft: "15%", width: "70%", padding: "7%" }}
        >
          <div className="row">
            <label>
              <h1 style={{ textAlign: "center" }}>Connexion</h1>
            </label>
            <form onSubmit={this.handleClientSubmit}>
              <div className="form-group">
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
                  Se Connecter
                </button>
                </div>
                <br />
              </div>
            </form>
            <br />
           
          </div>
        </div> 
        <Link to="/compte/inscription">
              S'inscrire
          </Link>
      </div>
    );
  }
}

export default Login;

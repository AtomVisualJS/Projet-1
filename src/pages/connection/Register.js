import React from "react";
import axios from "axios";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",

    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", this.state.username);
    formData.append("email", this.state.email);
    formData.append("password", this.state.password);
    formData.append("myImage", this.state.file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios
      .post("http://localhost:5000/api/clients/", formData, config)
      .then((response) => {
        alert("The file is successfully uploaded");
      })
      .catch((error) => {});
  }

  onNameChange(e) {
    this.setState({ username: e.target.value });
  }

  onEmailChange(e) {
    this.setState({ email: e.target.value });
  }
  onPasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  onChange(e) {
    this.setState({ file: e.target.files[0] });
  }

  render() {
    return (
        <div className="container" style={{textAlign:"center"}}>
      <form onSubmit={this.onFormSubmit}>
        <h1>Inscription</h1>
        <input type="text" name="username" onChange={this.onNameChange} placeholder="name"/>
        <br />
        <br />
        <input type="text" name="email" onChange={this.onEmailChange} placeholder="email" />
        <br />
        <br />
        <input type="password" name="password" onChange={this.onPasswordChange} placeholder="password" />
        <br />
        <br />
        <br />
        <br />
        <button type="submit">Upload</button>
      </form>
        </div>
        );
    }
}

export default Register;
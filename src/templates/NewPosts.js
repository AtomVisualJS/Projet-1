import React, { Component } from "react";
import axios from "axios";




class NewPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "", 
      files: "",
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleFilesChange = this.handleFilesChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleFilesChange(event) {
    this.setState({ files: event.target.files[0] });
  }

  handleDescriptionChange(event) {
    this.setState({ description: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", this.state.name);
    formData.append("files", this.state.files);
    formData.append("description", this.state.description);
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    };
    axios.post("http://localhost:5000/api/upload", formData, config)
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        });
    }
    

  render() {
    return (
      <div className="container">
        <br />$$
        <h2>New Post</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="nameHelp"
              placeholder="Enter name"
              onChange={this.handleNameChange}
            />
          
          </div>
          
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              className="form-control"
              id="description"
              rows="3"
              onChange={this.handleDescriptionChange}
            ></textarea>
          </div>
          <br />
          <div className="form-group">
            <input
              type="file"
              className="form-control-file"
              id="files"
              onChange={this.handleFilesChange}
            />
          </div>
          <br />
         <button type="submit" className="btn btn-primary">Uploads</button>
        </form>
      </div>
    );
  }
}
  
     
       
    
   
          
          
          
        

export default NewPosts;

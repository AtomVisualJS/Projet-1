import React, { Component } from "react";

class NewPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      price: "",
      adress: "",
      ville: "",
      cdpostal: "",
      files: "",
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleAdressChange = this.handleAdressChange.bind(this);
    this.handleVilleChange = this.handleVilleChange.bind(this);
    this.handleCdpostalChange = this.handleCdpostalChange.bind(this);
    this.handleFilesChange = this.handleFilesChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleDescriptionChange(event) {
    this.setState({ description: event.target.value });
  }

  handlePriceChange(event) {
    this.setState({ price: event.target.value });
  }

  handleAdressChange(event) {
    this.setState({ adress: event.target.value });
  }

  handleVilleChange(event) {
    this.setState({ ville: event.target.value });
  }

  handleCdpostalChange(event) {
    this.setState({ cdpostal: event.target.value });
  }

  handleFilesChange(event) {
    this.setState({ files: event.target.files[0] });
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", this.state.name);
    formData.append("description", this.state.description);
    formData.append("price", this.state.price);
    formData.append("adress", this.state.adress);
    formData.append("ville", this.state.ville);
    formData.append("cdpostal", this.state.cdpostal);
    formData.append("files", this.state.files);
   

  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nom</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={this.state.name}
                  onChange={this.handleNameChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={this.state.description}
                  onChange={this.handleDescriptionChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="price">Prix</label>
                <input
                  type="text"
                  className="form-control"
                  id="price"
                  value={this.state.price}
                  onChange={this.handlePriceChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="adress">Adresse</label>
                <input
                  type="text"
                  className="form-control"
                  id="adress"
                  value={this.state.adress}
                  onChange={this.handleAdressChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="ville">Ville</label>
                <input
                  type="text"
                  className="form-control"
                  id="ville"
                  value={this.state.ville}
                  onChange={this.handleVilleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="cdpostal">Code Postal</label>
                <input
                  type="text"
                  className="form-control"
                  id="cdpostal"
                  />
                </div>
                <div className="form-group">
                <label htmlFor="files">Image</label>
                <input
                  type="file"
                  className="form-control"
                  id="files"
                  onChange={this.handleFilesChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}



export default NewPosts;

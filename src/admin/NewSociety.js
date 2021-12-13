import React, { Component } from "react";
import VerticalLinearStepper from "./VerticalLinearStepper";
class NewProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      society: "",
      category: "",
      description: "",
      user: {
        id: "",
        name: "",
        email: "",

        phone: "",
        role: "",
      },
      location: {
        adrress: "",
        city: "",
        state: "",
        zip: "",
      },
    };
    this.handleSociety = this.handleSociety.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleUserName = this.handleUserName.bind(this);
    this.handleUserEmail = this.handleUserEmail.bind(this);
    this.handleUserPhone = this.handleUserPhone.bind(this);
    this.handleUserRole = this.handleUserRole.bind(this);

    this.handleLocationAddress = this.handleLocationAddress.bind(this);
    this.handleLocationCity = this.handleLocationCity.bind(this);
    this.handleLocationState = this.handleLocationState.bind(this);
    this.handleLocationZip = this.handleLocationZip.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSociety(event) {
    this.setState({ society: event.target.value });
  }

  handleCategory(event) {
    this.setState({ category: event.target.value });
  }

  handleDescription(event) {
    this.setState({ description: event.target.value });
  }

  handleUserName(event) {
    this.setState({ user: { name: event.target.value } });
  }

  handleUserEmail(event) {
    this.setState({ user: { email: event.target.value } });
  }

  handleUserPhone(event) {
    this.setState({ user: { phone: event.target.value } });
  }

  handleUserRole(event) {
    this.setState({ user: { role: event.target.value } });
  }

  handleLocationAddress(event) {
    this.setState({ location: { address: event.target.value } });
  }

  handleLocationCity(event) {
    this.setState({ location: { city: event.target.value } });
  }

  handleLocationState(event) {
    this.setState({ location: { state: event.target.value } });
  }

  handleLocationZip(event) {
    this.setState({ location: { zip: event.target.value } });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("Form Submitted:");
    console.log("Society: " + this.state.society);
    console.log("Category: " + this.state.category);
    console.log("Description: " + this.state.description);
    console.log("User Name: " + this.state.user.name);
    console.log("User Email: " + this.state.user.email);
    console.log("User Phone: " + this.state.user.phone);
    console.log("User Role: " + this.state.user.role);
    console.log("Location Address: " + this.state.location.address);
    console.log("Location City: " + this.state.location.city);
    console.log("Location State: " + this.state.location.state);
    console.log("Location Zip: " + this.state.location.zip);
  }

  render() {
    return (
    <div>
        <VerticalLinearStepper />
        <form onSubmit={this.handleSubmit}>
            <div style={{width:"50%", marginLeft:"25%"}}>
            <div className="form-group">
                <label>Society</label>
                <input type="text" className="form-control" value={this.state.society} onChange={this.handleSociety} />
            </div>
            <div className="form-group">
                <label>Category</label>
                <input type="text" className="form-control" value={this.state.category} onChange={this.handleCategory} />
            </div>
            <div className="form-group">
                <label>Description</label>
                <input type="textarea" className="form-control" value={this.state.description} onChange={this.handleDescription} />
           
            </div>  
            <br />
            <br />
            <div className="form-group">
                <label>User Name</label>
                <input type="text" className="form-control" value={this.state.user.name} onChange={this.handleUserName} />
            </div>
            <div className="form-group">
                <label>User Email</label>
                <input type="text" className="form-control" value={this.state.user.email} onChange={this.handleUserEmail} />
            </div>
            <div className="form-group">
                <label>User Phone</label>
                <input type="text" className="form-control" value={this.state.user.phone} onChange={this.handleUserPhone} />
            </div>
            <div className="form-group">
                <label>User Role</label>
                <input type="text" className="form-control" value={this.state.user.role} onChange={this.handleUserRole} />
            </div>
            <br />
            <br />
            <div className="form-group">
                <label>Location Address</label>
                <input type="text" className="form-control" value={this.state.location.address} onChange={this.handleLocationAddress} />
            </div>
            <div className="form-group">
                <label>Location City</label>
                <input type="text" className="form-control" value={this.state.location.city} onChange={this.handleLocationCity} />
            </div>
            <div className="form-group">
                <label>Location State</label>
                <input type="text" className="form-control" value={this.state.location.state} onChange={this.handleLocationState} />
            </div>
            <div className="form-group">
                <label>Location Zip</label>
                <input type="text" className="form-control" value={this.state.location.zip} onChange={this.handleLocationZip} />
            </div>
            <br />
            <br />
            <button type="submit" className="btn btn-primary">Submit</button>
         </div></form>
    </div>
    );
    }
}

export default NewProducts;

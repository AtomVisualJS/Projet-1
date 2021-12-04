import React, { Component } from "react";
import axios from "axios";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/©©products")
      .then((response) => {
        const products = response.data;
        this.setState({ products, isLoading: false });
      })

      .catch((error) => {
        console.log(error);
      });
  }
  
  render() {console.log(this.state.products);
    return (
      <div>
        <h1>Home</h1>
        {this.state.isLoading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <ul>
              {this.state.products.map((product) => (
                <li key={product._id}>
                  {product.title}
                  <img src={product.imageUrl} alt="fff" />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default Home;

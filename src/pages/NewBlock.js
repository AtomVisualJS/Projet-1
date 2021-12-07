import React, { Component } from 'react';
import axios from 'axios';
class NewBlock extends Component {

    // Blockchain

    constructor(props) {
        super(props);
        this.state = {
            block: Date.now(),
            chain :"",
        };
       
        this.handleChangeChain = this.handleChangeChain.bind(this);
        this.getBlockchain = this.getBlockchain.bind(this);
 

    }
   
  

    handleChangeChain(event) {
        this.setState({chain: event.target.value});
    }

    getBlockchain() {
        axios.post('http://localhost:5000/blockchain/compare', {
            block: this.state.block,
            chain: this.state.chain,
        })
        .then(function (response) {
            console.log(response);
        }
        )
        .catch(function (error) {
            console.log(error);
        }
        );

      
    }





    render() {
        return (
            <div>
                <h1> New Blockchain</h1>
                <div className="form-group">
                    <form onSubmit={this.getBlockchain}>
                        <label>Block</label>
                        <p>{this.state.block}</p>

                        <label>Chain</label>
                        <input type="text" className="form-control" value={this.state.chain} onChange={this.handleChangeChain} />
                        <br />
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    </div>


               
                
            </div>
        );
    }
}

export default NewBlock;
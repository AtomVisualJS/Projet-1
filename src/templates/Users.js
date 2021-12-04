import React, { Component } from 'react';
import axios from 'axios';

class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/clients')
            .then(response => {
                this.setState({ users: response.data });
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            })
    }




    render() {
        return (
           <div>
       
            </div>
        );
}
}


export default Users;
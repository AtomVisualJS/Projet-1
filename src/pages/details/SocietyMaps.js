import React, { Component } from 'react';
import SecondMaps from '../../web/SecondMaps';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

class SocietyMaps extends Component {
    render() {
        return (
            <div>
                <br />
                <br />
                <div style={{margin:5}}>
                <Link to="/">
                <Button variant="contained" disableElevation>
                    Retour à l'accueil
                </Button>
                </Link>
                </div>
                <div>
                <SecondMaps />
                </div>
            </div>
        );
    }
}

export default SocietyMaps;
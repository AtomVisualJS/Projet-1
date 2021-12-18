import React, { Component } from 'react';
import SecondMaps from '../../web/SecondMaps';
import { Link } from 'react-router-dom';
import SvgIconsColor from '../../others/SvgIconsColor';


class SocietyMaps extends Component {
    render() {
        return (
            <div>
                <br />
               
                <div style={{marginTop:"1%"}}>
                <Link to="/">
                <SvgIconsColor />
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
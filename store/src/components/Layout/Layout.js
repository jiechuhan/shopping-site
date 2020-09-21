import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
// import classes from './Layout.css';
import Navbar from '../Navbar/Navbar';

class Layout extends Component {
    render() {
        return (
            <Aux>
                <Navbar />
            </Aux>
            
        )
    }
};

export default Layout;
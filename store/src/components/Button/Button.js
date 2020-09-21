import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import classes from './Button.module.css';

const button = (props) => {
    return (
        <button className={`dropdown-item ${classes.button}`}>
            <span>{props.children}</span>
        </button>
    );
};

export default button;
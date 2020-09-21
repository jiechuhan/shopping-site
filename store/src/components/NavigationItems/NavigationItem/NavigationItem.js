import React from 'react';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import classes from './NavigationItem.module.css';

const navigationItem = (props) => (
    <li className={classes.nav}>
        <a href={props.link} className={props.active ? classes.active : null}>
            {props.children}
        </a>
    </li>
);

export default navigationItem;
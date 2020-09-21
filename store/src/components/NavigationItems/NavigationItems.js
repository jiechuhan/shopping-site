import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <div className={classes.navList}>
        <ul className={classes.nav}>
            <NavigationItem link="/">Order</NavigationItem>
            <NavigationItem link="/">Blog</NavigationItem>
            <NavigationItem link="/">Contact</NavigationItem>
        </ul>

        <ul className={`${classes.nav} ml-auto`}>
            <NavigationItem link="/">Location</NavigationItem>
            <NavigationItem link="/">Login</NavigationItem>
            <NavigationItem link="/"><i class="fa fa-search"></i></NavigationItem>
            <NavigationItem link="/">Cart</NavigationItem>
        </ul>
    </div>
    
);

export default navigationItems;
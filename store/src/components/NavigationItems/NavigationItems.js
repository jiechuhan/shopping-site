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
            <NavigationItem link="/"><i className="fas fa-map-marker-alt"></i>Location</NavigationItem>
            <NavigationItem link="/"><i className="fas fa-sign-in-alt"></i>Login</NavigationItem>
            <NavigationItem link="/"><i className="fa fa-search"></i>Search</NavigationItem>
            <NavigationItem link="/"><i className="fas fa-shopping-cart"></i>My Cart</NavigationItem>
        </ul>
    </div>
    
);

export default navigationItems;
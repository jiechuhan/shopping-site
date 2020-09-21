import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './HeroImage.css';

const heroImage = () => {
    return (
        <div className="HeroImage">
		  <div className="FreeShip">
			  <h3>FREE SHIPPING OVER $50. GET 10% OFF SITEWIDE.</h3>
		  </div>

        <div className="Title">
            <h1>C&J Bakery</h1>
        </div>

        <div className="container abstract">
            <div className="row">
                <div className="col-sm">
                <h2>Christmas Limited</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <button><span>EXPLORE</span></button>
                </div>
                <div className="col-sm"></div>
                <div className="col-sm"></div>
            </div>
        </div>
        </div>
    );
};

export default heroImage;

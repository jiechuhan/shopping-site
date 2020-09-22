import React from 'react';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import classes from './Card.module.css';
import img from '../../assets/img/1.jpg';

import Button from '../Button/Button';

const card = () => {
    return (
        <div className={`mx-2 my-4 ${classes.card}`}>
            <img src={img} className="card-img-top" alt={`bakery`}></img>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">$50</p>
            </div>
            <Button btnType="addToCart"><span>Add to cart</span></Button>
        </div>
    );
};

export default card;
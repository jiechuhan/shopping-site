import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import classes from './ProductList.module.css';

import Navbar from '../../components/Navbar/Navbar';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://localhost:5001/api/products')
            .then(res => {
                setProducts(res.data)
            })
            .catch(error => {
                setProducts(error)
            });
    },[])

    return (    
        <div>
            <Navbar className={classes.nav} />

            <div className={classes.container}>
                <h1 className={classes.order}>Order</h1>

                <div className="row">
                    <div className={`col-sm-3 ${classes.dropDownMenu}`}>
                        <Button btnType="dropdown-item">PICK-UP</Button>
                        <Button btnType="dropdown-item">DELIVERY</Button>
                        <Button btnType="dropdown">CURBSIDE PICK-UP</Button>
                    </div>

                    <div className="col-sm-9 d-flex flex-wrap justify-content-center">  
                        <h1>{products.id}</h1>
                        {products.map(product => {
                            return(
                                <Card key={product.id}
                                      productName={product.name}
                                      productPrice={product.price} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProductList;
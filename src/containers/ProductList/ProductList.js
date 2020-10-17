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
        axios.get('http://dummy.restapiexample.com/api/v1/employees')
            .then(res => {
                setProducts(res.data.data)
            })
            .catch(error => {
                setProducts(error)
            });
    },[])

    return (           

        <div>
            <div className={classes.sticky}>
                <Navbar className={classes.nav} />
            </div>

            <div className={classes.container}>
                <h1 className={classes.order}>Order</h1>

                <div className="row">
                    <div className={`col-sm-3 ${classes.dropDownMenu}`}>
                        <Button btnType="dropdown-item">PICK-UP</Button>
                        <Button btnType="dropdown-item">DELIVERY</Button>
                        <Button btnType="dropdown">CURBSIDE PICK-UP</Button>
                    </div>

                    <div className="col-sm-9 d-flex flex-wrap justify-content-center">  
                        <h1>{products.userId}</h1>
                        {products.map(product => {
                            return(
                                <Card key={product.id}
                                      productName={product.employee_name}
                                      productPrice={product.employee_salary} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProductList;
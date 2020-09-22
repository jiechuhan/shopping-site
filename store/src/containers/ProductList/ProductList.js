import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import classes from './ProductList.module.css';

import Navbar from '../../components/Navbar/Navbar';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';

const prodcutList = () => {
    return (
        <React.Fragment>
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

                    <div class="col-sm-9 d-flex flex-wrap justify-content-center">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    

                        
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default prodcutList;
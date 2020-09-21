import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import classes from './ProductList.module.css';

import Navbar from '../../components/Navbar/Navbar';
import Button from '../../components/Button/Button';

const prodcutList = () => {
    return (
        <React.Fragment>
            <div className={classes.sticky}>
                <Navbar className={classes.nav} />
            </div>
            
            <div className="container content">
                <h1 className={classes.order}>Order</h1>
                
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                    <div className={`col ${classes.dropDownMenu}`}>
                        <Button>PICK-UP</Button>
                        <Button>DELIVERY</Button>
                        <Button>CURBSIDE PICK-UP</Button>
                    </div>
                </div>
        </div>


        </React.Fragment>
        
    );
};

export default prodcutList;
import React from 'react';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import classes from './DetailPage.module.css';

import Navbar from '../../components/Navbar/Navbar';
import Button from '../../components/Button/Button';
import Carousel from '../../components/Carousel/Carousel';

function detailPage() {
    return (
        <div>
            <Navbar />
            <div className={classes.container}>
                <div class="row">
                    <div class="col-sm">
                        <Carousel />
                    </div>
                    <div class="col-sm">
                        <div className={`col-sm ${classes.content}`}>
                            <h1 className={classes.title}>Product Title</h1>
                            <h3 className={classes.description}>description</h3>
                            <p className={classes.price}>Price:</p>
                            <Button btnType="addToCart"><span>Add to cart</span></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default detailPage;
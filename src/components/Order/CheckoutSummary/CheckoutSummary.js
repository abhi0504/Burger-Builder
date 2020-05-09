import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import ContactData from '../../../containers/Checkout/Checkout'
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <div style={{width: '100%', margin: 'auto'}}>
            <h1>We hope it tastes well!</h1>
                <Burger 
                ingredients={props.ingredients} 
                />
            </div>
            <Button
                btnType="Danger"
                clicked={props.checkoutCancelled}>CANCEL</Button>
            <Button
                btnType="Success"
                clicked={props.checkoutContinued}>CONTINUE</Button>
        </div>
    );
}

export default checkoutSummary;

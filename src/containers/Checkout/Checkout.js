import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData'

class Checkout extends Component {
    state = {
        ingredients:null,
        totalPrice: 0
    }

    
    componentWillMount()
    {
        //Basically we are converting our search parameters in an object format
        const query = new URLSearchParams(this.props.location.search);
        let price = 0;
        const ingredient = {}
        for (let param of query.entries())
        {
            //['meat' , '1']
            if(param[0] === "price")
            {
                price = +param[1]
            }
            else
            {
                ingredient[param[0]] = +param[1]
            }
            
        }  
        this.setState({ingredients: ingredient})
        this.setState({totalPrice: price})
        
    }

    checkoutCancelHandler = () => 
    {
        this.props.history.goBack();
    }

    checkoutContinueHandler = () => 
    {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummary 
                ingredients={this.state.ingredients}
                checkoutCancelled={this.checkoutCancelHandler}
                checkoutContinued={this.checkoutContinueHandler}/>
                <Route path={this.props.match.path + '/contact-data'} render={(props) => (<ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} {...props} />)} />
                
            </div>
        );
    }
}

export default Checkout;

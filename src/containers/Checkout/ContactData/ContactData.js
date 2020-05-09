import React , { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'
class ContactData extends Component {
    state = {
        name : '',
        email : '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false,
        totalPrice: 0

    }

    orderHandler = (event) => 
    {
        event.preventDefault();
        alert('You continue!');
        this.setState({loading:true})
        const order = {
          ingredients: this.props.ingredients,
          price: this.props.price,
          customer: {
            name: 'Abhishek Sharma',
            address: {
              street: 'street - 7',
              zipCode: '110093',
              country: 'India'
            },
            email: 'test@test.com',
            deliveryMethod: 'fastest'
        
          }

        }
        axios.post('/orders.json',order)
        .then(response => 
            {
                this.setState({loading: false})
                this.props.history.push('/');
            })
        .catch(error => this.setState({loading: false}))
        
    }
    render() {
        let form = (
            <form>
                <input className={classes.input} type="text" name="name" placeholder="Enter Name" />
                <input className={classes.input} type="email" name="email" placeholder="Enter email" />
                <input className={classes.input} type="text" name="street" placeholder="Enter street" />
                <input className={classes.input} type="text" name="postalCode" placeholder="Enter postalCode" />
                <Button btnType='Success' clicked={this.orderHandler}>Order</Button>
            </form>
        )
        
        if(this.state.loading)
        {
            form=<Spinner />
        }
            
     return (
            <div className={classes.ContactData} >
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }
}

export default ContactData
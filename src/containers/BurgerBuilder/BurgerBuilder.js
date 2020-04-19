import React, { Component } from 'react'
import Auxilary from '../../hoc/aux/auxilary'
import Burger from '../../components/Burger/Burger'
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls'

const ITEMS_PRICES = {
  salad: 0.5,
  cheese: 0.8,
  meat: 1.3,
  bacon: 0.4
}

class BurgerBuilder extends Component {

 state = {

   items: {
     salad: 0,
     cheese: 0,
     meat: 0,
     bacon: 0
   },

   totalPrice: 4
 }

 addItemsHandler = (type) =>
 {
   const oldCount = this.state.items[type];
   const updatedCount = oldCount + 1;
   const updatedItems = {
     ...this.state.items
   }
   updatedItems[type] = updatedCount
   const priceAddition = ITEMS_PRICES[type]
   const oldPrice = this.state.totalPrice
   const newPrice = oldPrice + priceAddition
   this.setState({items : updatedItems , totalPrice : newPrice})

 }

 deleteItemsHandler = (type) =>
 {
   const oldCount = this.state.items[type];
   const updatedCount = oldCount - 1;
   const updatedItems = {
     ...this.state.items
   }
   updatedItems[type] = updatedCount
   const priceDeduction = ITEMS_PRICES[type]
   const oldPrice = this.state.totalPrice
   const newPrice = oldPrice - priceDeduction
   this.setState({items : updatedItems , totalPrice : newPrice})

 }

  render() {

    const disabledInfo = {
      ...this.state.items
    }

    for (let key in disabledInfo)
    {
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    return (
      <Auxilary>
      <Burger items={this.state.items} />
      <BurgerControls itemAdded={this.addItemsHandler}
      itemdelete={this.deleteItemsHandler}
      disabledInfo = {disabledInfo}
      burgerPrice = {this.state.totalPrice}
       />
      </Auxilary>
    )
  }
}

export default BurgerBuilder

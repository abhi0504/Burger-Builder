import React, { Component } from 'react'
import Auxilary from '../../hoc/aux/auxilary'
import Burger from '../../components/Burger/Burger'
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls'

class BurgerBuilder extends Component {

 state = {

   items: {
     salad: 0,
     bacon: 0,
     cheese: 0,
     meat: 0
   }
 }

  render() {
    return (
      <Auxilary>
      <Burger items={this.state.items} />
      <BurgerControls />
      </Auxilary>
    )
  }
}

export default BurgerBuilder

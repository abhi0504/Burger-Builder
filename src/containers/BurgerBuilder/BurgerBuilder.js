import React, { Component } from 'react'
import Auxilary from '../../hoc/aux/auxilary'
import Burger from '../../components/Burger/Burger'

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
      <div>Burger Controls</div>
      </Auxilary>
    )
  }
}

export default BurgerBuilder

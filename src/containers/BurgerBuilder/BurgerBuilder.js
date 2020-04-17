import React, { Component } from 'react'
import Auxilary from '../../hoc/aux/auxilary'
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {
  render() {
    return (
      <Auxilary>
      <Burger />
      <div>Burger Controls</div>
      </Auxilary>
    )
  }
}

export default BurgerBuilder

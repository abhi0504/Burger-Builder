import React from 'react'

import classes from './Burger.css'
import BurgerItem from './BurgerItem/BurgerItem'

const burger = (props) => {
  return(
    <div className={classes.Burger}>
    <BurgerItem type="bread-top" />
    <BurgerItem type="cheese" />
    <BurgerItem type="meat" />
    <BurgerItem type="bread-bottom" />
     </div>

  );
}

export default burger

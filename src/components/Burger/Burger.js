import React from 'react'

import classes from './Burger.css'
import BurgerItem from './BurgerItem/BurgerItem'

const burger = (props) => {

let transformedItems = Object.keys(props.items).map(igkey => {
  return [...Array( props.items[igkey] )].map( (_,i) => {
    return <BurgerItem key={igkey + i} type={igkey} />
})
})
.reduce((arr , el) => {
  return( arr.concat(el) )
} , []);

if(transformedItems.length === 0)
{
  transformedItems = <p>Please Add Something in Burger</p>
}

  return(
    <div className={classes.Burger}>
    <BurgerItem type="bread-top" />
    {transformedItems}
    <BurgerItem type="bread-bottom" />
     </div>

  );
}

export default burger

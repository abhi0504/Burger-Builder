import React from 'react'
import classes from './BurgerControls.css'
import BurgerControl from './BurgerControl/BurgerControl'

const controls = [
  { label:'Salad' , type:'salad' },
  { label:'Bacon' , type:'bacon' },
  { label:'Cheese' , type:'cheese' },
  { label:'Meat' , type:'meat' }
];

const burgerControls = (props) => {

  return (
    <div>
      <div className={classes.BurgerControls}>
      <p><strong>PRICE : {props.burgerPrice.toFixed(2)} $ </strong></p>
        {controls.map(ctrl =>
           (
          <BurgerControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => props.itemAdded(ctrl.type)}
          deleted={() => props.itemdelete(ctrl.type)}
          disabledInfo = {props.disabledInfo[ctrl.type]}
          />
        ) )}
        <button
        className={classes.OrderButton}
        disabled={!props.purchasable}>
        ORDER NOW</button>
      </div>
    </div>
  )
}

export default burgerControls

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
        {controls.map(ctrl =>
           (
          <BurgerControl key={ctrl.label}  label={ctrl.label}   />
        ) )}
      </div>
    </div>
  )
}

export default burgerControls

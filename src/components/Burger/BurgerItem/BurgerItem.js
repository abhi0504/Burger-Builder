import React , {Component} from 'react'
import classes from "./BurgerItem.css"
import PropTypes from 'prop-types'
class BurgerItem extends Component
{
  render()
  {
    let item = null;

    switch(this.props.type)
    {
      case('bread-bottom'):
      item = <div className={classes.BreadBottom}></div>;
      break;

      case('bread-top'):
      item =
      (
         <div className={classes.BreadTop}>
                <div className={classes.Seeds1}></div>
                <div className={classes.Seeds2}></div>
         </div>
      )
      break;

      case('meat'):
      item = <div className={classes.Meat}></div>;
      break;

      case('cheese'):
      item = <div className={classes.Cheese}></div>;
      break;

      case('bacon'):
      item = <div className={classes.Bacon}></div>;
      break;

      case('salad'):
      item = <div className={classes.Salad}></div>;
      break;

    default :
      item = null;
    }

    return item;

  }
}

BurgerItem.propTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerItem;

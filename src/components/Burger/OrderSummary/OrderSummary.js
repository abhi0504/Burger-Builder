import React from "react";

import classes from "./OrderSummary.css";
import Auxilary from "../../../hoc/aux/auxilary";

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Auxilary>
      <h3>Your Order</h3>
      <p>Ingredients Added: </p>
      <ul>{ingredientSummary}</ul>
    </Auxilary>
  );
};

export default orderSummary;

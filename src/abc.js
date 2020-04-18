

[
  const burger = (props) => {
  console.log(props);
  // gives you an array of the object keys
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      // make an array
      // console.log('igKey', igKey)
      // console.log('props.ingredients', Object.keys(props.ingredients))

      return [...Array(props.ingredients[igKey])].map((_, i) => {
        // console.log('props.ingredients[igKey]', props.ingredients[igKey])
        // salad + 2 for example
        return <BurgerIngredient key={igKey + i} type={igKey} />
      })
    })
      // use reduce to check if there is any element in the beginning
      // take each element and add it to the array
      // return arr.concat(el)
      // the initial value or reduce value is an empty array
      // .reduce((arr, el) => [...arr, ...el], []);
      .reduce((arr, el) => {
        // console.log('arr', arr);
        // console.log('el', el);
        return arr.concat(el)}, []);

    // console.log('transformedIngredients', transformedIngredients)
    if(transformedIngredients.length === 0) {
      transformedIngredients = <p>Please start adding ingredients!</p>;
    }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

// withRouter will pass updated match, location, and history props to the wrapped component
// export default withRouter(burger);
export default burger;
]

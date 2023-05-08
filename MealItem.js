import classes from "../MealsItem/Meals.css";

const MealItem = (props) => {
  const price =`$${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div classename={classes.decription}>{props.decription}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div></div>
    </li>
  );
};
export default MealItem;

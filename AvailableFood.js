
import MealItem from "../Meals/MealsItem/MealItem";
import classes from "./Available.css";
import Card from '../UI/Card';
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableFood = () => {
  const mealList = DUMMY_MEALS.map(meals => <li> <MealItem 
     key={meals.id}
     name={meals.name} 
     description={meals.description}
      price={meals.price}/></li>);

  return (
    <section className={classes.meals}>
      <Card>
      <ul>{mealList} </ul>
      </Card>
    </section>
  );
};

export default AvailableFood;

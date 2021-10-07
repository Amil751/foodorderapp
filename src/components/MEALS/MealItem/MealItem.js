import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
const MealItem = (props) => {
  const meal = {
    id: props.id,
    name: props.name,
    price: props.price,
    description:props.description,
    quantity:1,
    totalPrice:props.price
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div> {props.description}</div>
        <div>${props.price}</div>
      </div>
      <div>
      <MealItemForm meal={meal}/>
      </div>
    </li>
  );
};
export default MealItem;

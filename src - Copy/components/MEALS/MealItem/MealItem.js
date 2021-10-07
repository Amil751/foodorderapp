import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../context/context";
import { useContext } from "react";
const MealItem = (props) => {
  const global = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;
  const meal = {
    id: props.id,
    name: props.name,
    price: props.price,
    amount:0
  };
 
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div> {props.description}</div>
        <div>{price}</div>
      </div>
      <div>
        <MealItemForm meal={meal} addItem={global.addItem} />
      </div>
    </li>
  );
};
export default MealItem;

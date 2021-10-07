import classes from "./CartItem.module.css";
 import CartContext from "../context/context";
import { useContext } from "react";
// import { useEffect } from "react/cjs/react.development";
const CartItem = (props) => {
    const global=useContext(CartContext)
    const addItemHandler=()=>{
        console.log(global.items[0].amount++);
    }
    const removeItemHandler=()=>{

    }
  return (
    
      <div className={classes.item}>
        <div className={classes.items}>
          <div className={classes.name}>
            <p>{props.name}</p>
          </div>

          <div className={classes.price}>
            <p>{props.price}$</p>
            <p>{props.amount}</p>
          </div>
        </div>
      
      <div className={classes.button}>
        <button onClick={removeItemHandler} >-</button>
        <button onClick={addItemHandler}>+</button>
      </div>
      </div>
    
  );
};
export default CartItem;

import { useDispatch } from "react-redux";
import { cartDataAction } from "../STORE/cartdata";
import classes from "./CartItem.module.css";
const CartItem = (props) => {
  const dispatch=useDispatch()
    const inreaseItemHandler=()=>{
      dispatch(cartDataAction.increaseCount(props.id))
    }
    const removeItemHandler=()=>{
      dispatch(cartDataAction.removeItemFromCart(props.id))
    }
  return (
    
      <div className={classes.item}>
        <div className={classes.items}>
          <div className={classes.name}>
            <p>{props.name}</p>
          </div>

          <div className={classes.price}>
            <p>{props.price}$</p>
            <p>{props.quantity}</p>
          </div>
        </div>
      
      <div className={classes.button}>
        <button onClick={removeItemHandler} >-</button>
        <button onClick={inreaseItemHandler}>+</button>
      </div>
      </div>
    
  );
};
export default CartItem;

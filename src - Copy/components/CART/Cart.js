import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

import CartContext from "../context/context";
import { useContext } from "react";
import CartItem from "./CartItem";
const Cart = (props) => {
  const global = useContext(CartContext);
  console.log(global.items);
  //-------------------------------
  const filteredArr = global.items.reduce((acc, current) => {
    const x = acc.find(item => item.id === current.id);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);
  console.log(filteredArr)
  //-------------------------------------
  return (
    <Modal closeCart={props.onCloseCart}>
      <ul className={classes["cart-items"]}>
        {filteredArr.map((item) => {
          return (
            <CartItem
              key={item.id + Math.random()}
              name={item.name}
              price={item.price}
              amount={item.amount}
            />
          );
        })}
      </ul>

      <div className={classes.total}>
        <span>Total amount</span>
        <span>{global.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onCloseCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;

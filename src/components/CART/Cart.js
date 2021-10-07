import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import { useDispatch } from "react-redux";
import { foodOrderAction } from "../STORE/slice";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
const Cart = (props) => {
  const datacart = useSelector((state) => state.cart.datacart);
  const totalamount=useSelector(state=>state.cart.totalamount);
  const dispatch = useDispatch();
  const closeCart = () => {
    dispatch(foodOrderAction.closeCart());
  };
  return (
    <Modal closeCart={closeCart}>
      <ul className={classes["cart-items"]}>
        {datacart.map((item) => {
          return (
            <CartItem
              key={item.id}
              name={item.name}
              quantity={item.totalquantity}
              price={item.totalPrice}
              id={item.id}
            />
          );
        })}
      </ul>

      <div className={classes.total}>
        <span>{totalamount.totalamount.toFixed(2)}</span>
        <span></span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={closeCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;

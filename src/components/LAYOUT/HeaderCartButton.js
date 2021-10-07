import CartIcon from "../CART/CartIcon";
import clasess from "./HeaderCartButton.module.css";
import { useDispatch,useSelector } from "react-redux";
import { foodOrderAction } from "../STORE/slice";
const HeaderCartButton = (props) => {
  const count=useSelector(state=>state.cart.datacart).length;
  console.log(count);
 const dispatch=useDispatch();
 const showCart=()=>{
   dispatch(foodOrderAction.showCart());
 }
  return (
    <button className={clasess.button} onClick={showCart}>
      <span className={clasess.icon}>
        <CartIcon />
      </span>
      <span> your cart</span>
      <span className={clasess.badge}>{count}</span>
    </button>
  );
};
export default HeaderCartButton;

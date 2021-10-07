import CartIcon from "../CART/CartIcon";
import clasess from "./HeaderCartButton.module.css";
import CartContext from "../context/context";
import { useContext } from "react";

const HeaderCartButton = (props) => {
  const global = useContext(CartContext);
 
console.log(global.items);
  let amil=0; 
    global.items.map((item)=>{
        return amil+=parseFloat(item.amount);
    })
 console.log(amil);
  return (
    <button className={clasess.button} onClick={props.onClick}>
      <span className={clasess.icon}>
        <CartIcon />
      </span>
      <span> your cart</span>
      <span className={clasess.badge}>{amil}</span>
    </button>
  );
};
export default HeaderCartButton;

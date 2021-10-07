import { useState } from "react/cjs/react.development";
import CartContext from "./context";

const CartProvider = (props) => {
  const [cartMeals, setCartmeals] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  
  const removeItemFromCart = (item) => {};

  const addItemToCart = (item) => {
    setCartmeals([item, ...cartMeals]);
    setTotalAmount(() => {
      return totalAmount + item.price*item.amount;
    });
  };
  const CartContextValue = {
    items: cartMeals,
    totalAmount: totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };
  return (
    <CartContext.Provider value={CartContextValue}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;

import { useState } from "react";
import Cart from "./components/CART/Cart";
import CartProvider from "./components/context/CartProvider";

import Header from "./components/LAYOUT/Header";
import Meals from "./components/MEALS/Meals";
//import AvailableMeals from "./components/MEALS/AvailableMeals";

function App() {
  const [showCart, setShowCart] = useState(false);
  const showcartHandler = () => {
    setShowCart(true);
  };

  const closeCart = () => {
    setShowCart(false);
  };

  return (
    <CartProvider>
    <div className="App">
      {showCart && <Cart onCloseCart={closeCart} />}
     
        <Header onShowCart={showcartHandler} />
        <main>
          <Meals />
        </main>
      
    </div>
    </CartProvider>
  );
}

export default App;

import { useState } from "react";
import Cart from "./components/CART/Cart";

import Header from "./components/LAYOUT/Header";
import Meals from "./components/MEALS/Meals";
import { useSelector } from "react-redux";
function App() {
  const show=useSelector(state=>state.order.show)
  return (
    <div className="App">
      
      {show &&<Cart />}

      <Header />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;

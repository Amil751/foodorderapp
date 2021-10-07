import { configureStore } from "@reduxjs/toolkit";
// import { createSlice } from "@reduxjs/toolkit";
import foodOrderSlice from "./slice";
import cartDataSlice from "./cartdata";

// const foodOrederSlice=createSlice({
//   name:'foododer',
//   initialState:{
//     id:'amil',
//     total:5
//   },
//   reducers:{
//     addItemTocart(){},
//     removeItemFromCart(){}
//   }
// })

const store = configureStore({
  reducer: { order: foodOrderSlice.reducer ,cart:cartDataSlice.reducer},
});
// export const FoodorderAction=foodOrederSlice.actions;
export default store;

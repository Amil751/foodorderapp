import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  datacart: [],
  totalamount: { totalamount: 0 },
};
const cartDataSlice = createSlice({
  name: "Cartdata",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const a = state.datacart.find((item) => item.id === action.payload.id);
      if (!a) {
        state.datacart = [...state.datacart, action.payload];
        state.totalamount.totalamount +=
          action.payload.price * action.payload.totalquantity;
      } else {
        a.totalquantity =
          parseFloat(a.totalquantity) +
          parseFloat(action.payload.totalquantity);
        state.totalamount.totalamount +=
          action.payload.price * parseFloat(action.payload.totalquantity);
      }
    },
    increaseCount(state, action) {
      const a = state.datacart.find((item) => item.id === action.payload);
      a.totalquantity++;
      state.totalamount.totalamount+=a.price;
    },
    removeItemFromCart(state, action) {
      const a = state.datacart.find((item) => item.id === action.payload);
      if (a.totalquantity <=1) {
        state.totalamount.totalamount-=a.price;
        state.datacart=state.datacart.filter(item=>item.id!==action.payload);
        return;
      } else {
        a.totalquantity--;
        state.totalamount.totalamount-=a.price;
      }
    },
  },
});
export const cartDataAction = cartDataSlice.actions;
export default cartDataSlice;

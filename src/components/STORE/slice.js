import { createSlice } from "@reduxjs/toolkit"

const initialState={data:[],show:false,cartdata:[]}
const foodOrderSlice=createSlice({
  name:'foododer',
  initialState,
  reducers:{
    getDataFromdataBase(state,action){
      state.data=action.payload
    },
  
    showCart(state){
        state.show=!state.show
    },
    closeCart(state){
      state.show=false
    }
  }
})


export const foodOrderAction=foodOrderSlice.actions
export default foodOrderSlice;
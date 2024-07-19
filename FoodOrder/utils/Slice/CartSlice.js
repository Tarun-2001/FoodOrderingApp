import { createSlice, current } from "@reduxjs/toolkit";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addtoCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.card?.info?.id !== action.payload);    
    },
  },
});

export const { addtoCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;

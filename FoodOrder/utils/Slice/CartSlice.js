import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addtoCart: (state, action) => {
      state.items.push(action.payload);
      console.log(current(state));
    },
    removeFromCart: (state, action) => {
        state.items = state.items.filter((item) => item.card?.info?.id !== action.payload);
        console.log(current(state));
    },
  },
});

export const { addtoCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;

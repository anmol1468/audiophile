import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "YX1 Wireless Earphones",
    quantity: 1,
    price: 599,
    img: "/public/cart/image-yx1-earphones.jpg",
  },
  {
    name: "XX59 Headphones",
    quantity: 2,
    price: 899,
    img: "/public/cart/image-xx59-headphones.jpg",
  },
  {
    name: "XX99 Mark II Headphones",
    quantity: 1,
    price: 2999,
    img: "/public/cart/image-xx99-mark-two-headphones.jpg",
  },
];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;

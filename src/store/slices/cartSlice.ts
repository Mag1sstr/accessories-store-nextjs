import { createSlice } from "@reduxjs/toolkit";

interface ICartState {}

const initialState = {};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {},
});

export const {} = cartSlice.actions;

export default cartSlice.reducer;

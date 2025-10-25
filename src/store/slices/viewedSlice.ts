import { IProducts } from "@/types/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IViewedState {
  viewedProducts: IProducts[];
}

const initialState: IViewedState = {
  viewedProducts: [],
};

export const viewedSlice = createSlice({
  name: "viewedSlice",
  initialState,
  reducers: {
    addViewedProduct(state, action: PayloadAction<IProducts>) {
      if (state.viewedProducts.length >= 5) {
        state.viewedProducts.shift();
      }
      state.viewedProducts.push(action.payload);
    },
  },
});
export const { addViewedProduct } = viewedSlice.actions;

export default viewedSlice.reducer;

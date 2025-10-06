import { ICart } from "@/types/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICartState {
  cart: ICart[];
}

const getCart = () => {
  const cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(cart);
  }
};

const initialState: ICartState = {
  cart: getCart() ?? [],
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<ICart>) {
      for (let el of state.cart) {
        if (el.id === action.payload.id) {
          return;
        }
      }
      state.cart.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    deleteCartItem(state, action: PayloadAction<number>) {
      state.cart = state.cart.filter((el) => el.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export const { addToCart, deleteCartItem } = cartSlice.actions;

export default cartSlice.reducer;

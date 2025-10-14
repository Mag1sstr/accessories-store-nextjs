import { ICart, IProducts } from "@/types/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICartState {
  cart: ICart[];
  addedProduct: null | IProducts;
}

export const getCart = () => {
  const cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(cart) as ICart[];
  }
};

const initialState: ICartState = {
  cart: getCart() ?? [],
  addedProduct: null,
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
    increaseCartItem(state, action) {
      state.cart = state.cart.map((el) => {
        if (el.id === action.payload) {
          return {
            ...el,
            count: el.count + 1,
          };
        }
        return el;
      });
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    decreaseCartItem(state, action) {
      state.cart = state.cart.map((el) => {
        if (el.id === action.payload && el.count > 1) {
          return {
            ...el,
            count: el.count - 1,
          };
        }
        return el;
      });
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    setAddedProduct(state, action: PayloadAction<IProducts>) {
      state.addedProduct = action.payload;
    },
  },
});

export const {
  addToCart,
  deleteCartItem,
  increaseCartItem,
  decreaseCartItem,
  setAddedProduct,
} = cartSlice.actions;

export default cartSlice.reducer;

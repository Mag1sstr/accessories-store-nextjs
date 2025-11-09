import { IProducts } from "@/types/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IFavoritesState {
  favorites: IProducts[];
}

export const getFavorites = () => {
  if (typeof window === "undefined") return [];

  try {
    const cart = localStorage.getItem("cart");
    return cart ? (JSON.parse(cart) as IProducts[]) : [];
  } catch (err) {
    return [];
  }
};

const initialState: IFavoritesState = {
  favorites: getFavorites(),
};

export const favoritesSlice = createSlice({
  name: "favoritesSlice",
  initialState,
  reducers: {
    addToFavorites(state, action: PayloadAction<IProducts>) {
      if (state.favorites.some((el) => el.id === action.payload.id)) {
        return;
      }
      state.favorites.push(action.payload);
    },
  },
});

export const { addToFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;

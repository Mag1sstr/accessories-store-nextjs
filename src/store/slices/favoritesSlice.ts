import { IProducts } from "@/types/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IFavoritesState {
  favorites: IProducts[];
}

export const getFavorites = () => {
  if (typeof window === "undefined") return [];

  try {
    const cart = localStorage.getItem("favorites");
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
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    deleteFavoritesItem(state, action: PayloadAction<Number>) {
      state.favorites = state.favorites.filter(
        (el) => el.id !== action.payload
      );
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
});

export const { addToFavorites, deleteFavoritesItem } = favoritesSlice.actions;

export default favoritesSlice.reducer;

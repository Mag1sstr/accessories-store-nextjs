import { IProducts } from "@/types/interfaces";
import { getLocalStorageValue } from "@/utils/getLocalStorageValue";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IFavoritesState {
  favorites: IProducts[];
}

const initialState: IFavoritesState = {
  favorites: getLocalStorageValue<IProducts[]>("favorites") ?? [],
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

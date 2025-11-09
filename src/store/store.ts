import { api } from "@/api/api";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import filterSlice from "./slices/filterSlice";
import cartSlice from "./slices/cartSlice";
import viewedSlice from "./slices/viewedSlice";
import authSlice from "./slices/authSlice";
import favoritesSlice from "./slices/favoritesSlice";

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    cart: cartSlice,
    viewed: viewedSlice,
    auth: authSlice,
    favorites: favoritesSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(api.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

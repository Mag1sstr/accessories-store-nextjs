import { IUser } from "@/types/interfaces";
import { getLocalStorageValue } from "@/utils/getLocalStorageValue";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAuthState {
  user: IUser | null;
  token: string | null;
}

const getToken = () => {
  if (typeof window == "undefined") return null;
  const token = localStorage.getItem("token");
  return token;
};

const initialState: IAuthState = {
  user: null,
  token: getToken(),
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUser | null>) {
      state.user = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
    logoutUser(state) {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    },
  },
});
export const { setToken, setUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;

import { IUser } from "@/types/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAuthState {
  user: IUser | null;
  token: string | null;
}

const initialState: IAuthState = {
  user: null,
  token: localStorage.getItem("token"),
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
  },
});
export const { setToken, setUser } = authSlice.actions;

export default authSlice.reducer;

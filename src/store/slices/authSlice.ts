import { createSlice } from "@reduxjs/toolkit";

interface IAuthState {
  token: string | null;
}

const initialState = {
  token: localStorage.getItem("token"),
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {},
});
export const {} = authSlice.actions;

export default authSlice.reducer;

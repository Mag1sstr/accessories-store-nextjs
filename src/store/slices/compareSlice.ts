import { IProducts } from "@/types/interfaces";
import { getLocalStorageValue } from "@/utils/getLocalStorageValue";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICompareState {
  compareData: IProducts[];
}
const initialState: ICompareState = {
  compareData: getLocalStorageValue<IProducts[]>("compare") ?? [],
};

export const compareSlice = createSlice({
  name: "compareSlice",
  initialState,
  reducers: {
    addToCompare(state, action) {
      if (state.compareData.some((el) => el.id === action.payload.id)) return;
      state.compareData.push(action.payload);
      localStorage.setItem("compare", JSON.stringify(state.compareData));
    },
    deleteCompareItem(state, action: PayloadAction<number>) {
      state.compareData = state.compareData.filter(
        (el) => el.id !== action.payload
      );
      localStorage.setItem("compare", JSON.stringify(state.compareData));
    },
  },
});

export const { addToCompare, deleteCompareItem } = compareSlice.actions;

export default compareSlice.reducer;

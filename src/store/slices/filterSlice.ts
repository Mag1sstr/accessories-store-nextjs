import { createSlice } from "@reduxjs/toolkit";

interface IFilterState {
  categoryId: number;
  rangeValue: [number, number];
}

const initialState: IFilterState = {
  categoryId: 0,
  rangeValue: [1, 100],
};

export const filterSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setRangeValue(state, action) {
      state.rangeValue = action.payload;
    },
  },
});

export const { setCategoryId, setRangeValue } = filterSlice.actions;

export default filterSlice.reducer;

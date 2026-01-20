import { ICart } from "@/types/interfaces";
import { getLocalStorageValue } from "@/utils/getLocalStorageValue";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IOrder {
  orderNumber: number;
  items: ICart[];
}

interface IOrdersState {
  orders: IOrder[];
}

const initialState: IOrdersState = {
  orders: getLocalStorageValue<IOrder[]>("orders") ?? [],
};

export const ordersSlice = createSlice({
  name: "ordersSlice",
  initialState,
  reducers: {
    addNewOrder(state, action: PayloadAction<ICart[]>) {
      const data = getLocalStorageValue<IOrder[]>("orders");
      const getOrderNumber = data ? data.at(-1)!.orderNumber + 1 : 1;

      state.orders.push({
        orderNumber: getOrderNumber,
        items: action.payload,
      });

      localStorage.setItem("orders", JSON.stringify(state.orders));
    },
  },
});
export const { addNewOrder } = ordersSlice.actions;
export default ordersSlice.reducer;

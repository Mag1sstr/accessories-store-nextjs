import { useAppSelector } from "@/store/store";

export const useCart = () => useAppSelector((state) => state.cart);

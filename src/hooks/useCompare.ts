import { useAppSelector } from "@/store/store";

export const useCompare = () => useAppSelector((state) => state.compare);

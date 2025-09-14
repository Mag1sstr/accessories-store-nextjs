"use client";

import { store } from "@/store/store";
import { Provider } from "react-redux";
import ModalsContextProvider from "./ModalsContextProvider";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ModalsContextProvider>{children}</ModalsContextProvider>
    </Provider>
  );
}

export default Providers;

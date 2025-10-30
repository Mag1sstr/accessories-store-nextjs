"use client";

import { store } from "@/store/store";
import { Provider } from "react-redux";
import ModalsContextProvider from "./ModalsContextProvider";
import AuthProvider from "./AuthProvider";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ModalsContextProvider>
        <AuthProvider>{children}</AuthProvider>
      </ModalsContextProvider>
    </Provider>
  );
}

export default Providers;

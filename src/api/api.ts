import {
  ICategories,
  Ilogin,
  IProducts,
  IProductsParams,
} from "@/types/interfaces";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.escuelajs.co/api/v1" }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProducts[], IProductsParams>({
      query: (params) => ({
        url: "/products",
        params,
      }),
    }),
    getCategories: builder.query<ICategories[], null>({
      query: () => ({
        url: "/categories",
      }),
    }),
    loginUser: builder.mutation<Ilogin, { email: string; password: string }>({
      query: (body) => ({
        method: "POST",
        url: "/auth/login",
        body,
      }),
    }),
  }),
});
export const {
  useGetProductsQuery,
  useGetCategoriesQuery,
  useLoginUserMutation,
} = api;

import {
  ICategories,
  Ilogin,
  IloginBody,
  IProducts,
  IProductsParams,
  IReg,
  IRegBody,
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
    loginUser: builder.mutation<Ilogin, IloginBody>({
      query: (body) => ({
        method: "POST",
        url: "/auth/login",
        body,
      }),
    }),
    regUser: builder.mutation<IReg, IRegBody>({
      query: (body) => ({
        method: "POST",
        url: "/users/",
        body,
      }),
    }),
  }),
});
export const {
  useGetProductsQuery,
  useGetCategoriesQuery,
  useLoginUserMutation,
  useRegUserMutation,
} = api;

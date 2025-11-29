import { RootState } from "@/store/store";
import {
  ICategories,
  ICreateProductBody,
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
  tagTypes: ["Products"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.escuelajs.co/api/v1",
    prepareHeaders(headers, { getState }) {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProducts[], IProductsParams>({
      query: (params) => ({
        url: "/products",
        params,
      }),
      providesTags: () => [{ type: "Products" }],
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
    getUser: builder.query({
      query: () => ({
        url: "/auth/profile",
      }),
    }),
    createProduct: builder.mutation<null, ICreateProductBody>({
      query: (body) => ({
        method: "POST",
        url: "/products/",
        body,
      }),
      invalidatesTags: () => [{ type: "Products" }],
    }),
    deleteProduct: builder.mutation<null, number | string>({
      query: (id) => ({
        method: "delete",
        url: `/products/${id}`,
      }),
      invalidatesTags: () => [{ type: "Products" }],
    }),
  }),
});
export const {
  useGetProductsQuery,
  useGetCategoriesQuery,
  useLoginUserMutation,
  useRegUserMutation,
  useGetUserQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
} = api;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}products`,
    headers: {
      "Content-Type": "application/json",
    },
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<any, any>({
      query: () => ({
        url: "/",
        method: "GET",
      }),
    }),

    getProductsById: builder.query<any, any>({
      query: (id) => ({
        url: `/${id}`,
        method: "GET",
      }),
    }),
    getProductsByCategory: builder.query<any, any>({
      query: (category) => ({
        url: `/category/${category}`,
        method: "GET",
      }),
    }),
    getAllCategory: builder.query<any, any>({
      query: () => ({
        url: `/category`,
        method: "GET",
      }),
    }),
    createCategory: builder.mutation<any, any>({
      query: (body) => ({
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
        url: `/category`,
        method: "POST",
        body,
      }),
    }),
    updateCategory: builder.mutation<any, any>({
      query: (body) => ({
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
        url: `/category/${body.id}`,
        method: "PATCH",
        body,
      }),
    }),

    deleteCategory: builder.mutation<any, any>({
      query: (id) => ({
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
        url: `/category/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {} = productApi;
export const {
  useGetProductsQuery,
  useGetProductsByIdQuery,
  useGetProductsByCategoryQuery,
  useGetAllCategoryQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = productApi;

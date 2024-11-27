import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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
  }),
});

export const {} = productApi;
export const {
  useGetProductsQuery,
  useGetProductsByIdQuery,
  useGetProductsByCategoryQuery,
} = productApi;

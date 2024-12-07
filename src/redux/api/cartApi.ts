import { ICartItem, ICartItemResquest } from "@/utils/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}cart`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  }),
  endpoints: (builder) => ({
    getCart: builder.query<any, any>({
      query: () => ({
        url: "/",
        method: "GET",
      }),
    }),

    updateCart: builder.mutation<any, ICartItemResquest>({
      query: (body) => ({
        url: "/",
        method: "PATCH",
        body,
      }),
    }),
  }),
});

export const { useGetCartQuery, useUpdateCartMutation } = cartApi;

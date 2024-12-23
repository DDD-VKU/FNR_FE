import { ICreateOrder, IUpdateOrder } from "@/utils/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}order`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  }),
  endpoints: (builder) => ({
    createOrder: builder.mutation<any, ICreateOrder>({
      query: (body) => ({
        url: "/",
        method: "POST",
        body,
      }),
    }),
    getOrders: builder.query<any, any>({
      query: () => ({
        url: "/",
        method: "GET",
      }),
    }),
    adminGetOrders: builder.query<any, any>({
      query: () => ({
        url: "/admin",
        method: "GET",
      }),
    }),
    updateOrder: builder.mutation<any, IUpdateOrder>({
      query: (body) => ({
        url: ``,
        method: "PATCH",
        body,
      }),
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetOrdersQuery,
  useAdminGetOrdersQuery,
  useUpdateOrderMutation,
} = orderApi;

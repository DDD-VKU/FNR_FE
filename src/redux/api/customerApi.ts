import { ICreateAddress } from "@/utils/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const customerApi = createApi({
  reducerPath: "customerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}customer`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  }),
  endpoints: (builder) => ({
    createAddress: builder.mutation<any, ICreateAddress>({
      query: (body) => ({
        url: "/address",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useCreateAddressMutation } = customerApi;

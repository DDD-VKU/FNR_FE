import { ICreateAddress } from "@/utils/types";
import { IUser } from "@/utils/types";
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
    getAllCustomer: builder.query<any, IUser>({
      query: () => ({
        url: "/",
        method: "GET",
      }),
    }),

    deleteCustomer: builder.mutation<any, any>({
      query: (id) => ({
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
        url: `/${id}`,
        method: "DELETE",
      }),
    }),

    getAddressById: builder.query<any, any>({
      query: () => ({
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
        url: `/address/find/${localStorage.getItem("addressId")}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAllCustomerQuery,
  useDeleteCustomerMutation,
  useCreateAddressMutation,
  useGetAddressByIdQuery,
} = customerApi;

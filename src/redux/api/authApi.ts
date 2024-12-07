import { ILogin, IRegister } from "@/utils/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}auth`,
    headers: {
      "Content-Type": "application/json",
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<any, ILogin>({
      query: (body) => ({
        url: "/login",
        method: "POST",
        body,
      }),
    }),

    register: builder.mutation<any, IRegister>({
      query: (body) => ({
        url: "/register",
        method: "POST",
        body,
      }),
    }),

    checkToken: builder.query<any, any>({
      query: () => ({
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
        url: "/check-token",
        method: "POST",
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useCheckTokenQuery } =
  authApi;

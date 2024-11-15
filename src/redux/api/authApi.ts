import { ILogin, IRegister } from "@/utils/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;

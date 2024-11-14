import { ILogin, IRegister } from "@/utils/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { cookies } from "next/headers";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.BASE_URL}auth`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookies().get("token")?.value}`,
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<any, ILogin>({
      query: (body) => ({
        url: "/",
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

export const { useLoginMutation } = authApi;
